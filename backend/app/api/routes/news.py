from typing import Any

import requests
from fastapi import APIRouter

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
    # Send request to model for prediction
    model_response = requests.post(settings.lambda_url, data={"body": body.content})
    # Extract predicted label from model response
    predicted_label = model_response.json()["predicted_label"]
    # Send request to model for sentiment analysis
    sentiment_analysis = requests.post(settings.subjectivity_polarity_lambda_url, data={"body": body.content})
    # Extract subjectivity and polarity from model response
    subjectivity = sentiment_analysis.json()["subjectivity"]
    polarity = sentiment_analysis.json()["polarity"]
    # Generate response for related news
    related_news = generate_response(body.title, body.content)

    # Check if predicted label is below threshold
    if predicted_label < 0.80:
        # If predicted label is below threshold, mark news as False
        return {
            "veridic": "False",
            "subjectivity": subjectivity,
            "polarity": polarity,
            "related_news": related_news,
        }
    else:
        # If predicted label is above threshold, mark news as True
        return {
            "veridic": "True",
            "subjectivity": subjectivity,
            "polarity": polarity,
            "related_news": related_news,
        }
