from typing import Any

from fastapi import APIRouter

from utils.gemini import generate_response
from schemas.news import NewsBase, NewsBody 


router = APIRouter()

@router.post("/validate")
def verify_news(body: NewsBody):
    # call to the model  

    response = generate_response(body.title, body.content)
    return response
