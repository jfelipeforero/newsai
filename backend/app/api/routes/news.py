from typing import Any

from fastapi import APIRouter
import requests
from core.config import settings

from utils.gemini import generate_response
from schemas.news import NewsBase, NewsBody 


router = APIRouter()


@router.post("/validate")
def verify_news(body: NewsBody):
    model_response = requests.post(settings.lambda_url, data = {"body": body.content}) 
    predicted_label = model_response.json()["predicted_label"]
    related_news = generate_response(body.title, body.content)

    if predicted_label < 0.80:
        return {
                "veridic": "False",
                "related_news": related_news, 
                }
    else:
        return {
                "veridic": "True",
                "related_news": related_news
                } 
