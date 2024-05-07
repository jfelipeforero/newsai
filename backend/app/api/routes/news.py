from typing import Any

import requests
from newsapi import NewsApiClient
from fastapi import APIRouter
from datetime import datetime
from datetime import timedelta

from core.config import settings
from schemas.news import NewsBody
from utils.gemini import generate_response

router = APIRouter()


@router.post("/validate")
def verify_news(body: NewsBody):
    """
    Endpoint to validate the veracity of news content.

    Args:
        body (NewsBody): Request body containing news content and title.

    Returns:
        dict: Veracity result and related news.
    """

    content = " ".join(body.content.splitlines())

    # Send request to model for prediction

    payload = {"body": content}

    model_response = requests.post(settings.lambda_url, json=payload)
    # Extract predicted label from model response
    # print("PPP:",model_response.json(),body.content)
    predicted_label = model_response.json()["predicted_label"]
    # Send request to model for sentiment analysis

    sentiment_analysis = requests.post(
        settings.sentiment_analysis_lambda_url, json=payload
    )

    current_dateTime = datetime.now()
    week_before = datetime.today() - timedelta(days=7)
    str_week_before = week_before.strftime("%Y-%m-%d")

    # Extract subjectivity and polarity from model response
    subjectivity = sentiment_analysis.json()["subjectivity"]
    polarity = sentiment_analysis.json()["polarity"]
    # Generate response for related news
    keywords = generate_response(body.title)
    newsapi = NewsApiClient(api_key=settings.news_api_key)
    all_articles = newsapi.get_everything(
        q=keywords.data,
        from_param=str_week_before,
        page_size=2,
        page=1,
        language="en",
        sort_by="relevancy",
    )

    # print("PPP:",predicted_label,type(predicted_label))
    # Check if predicted label is below threshold
    if predicted_label < 0.80:
        # If predicted label is below threshold, mark news as False
        return {
            "veridic": "False",
            "subjectivity": subjectivity,
            "polarity": polarity,
            "related_news": all_articles,
        }
    else:
        # If predicted label is above threshold, mark news as True
        return {
            "veridic": "True",
            "subjectivity": subjectivity,
            "polarity": polarity,
            "related_news": all_articles,
        }
