from fastapi import APIRouter

from api.routes import news

"""
Creation of the news router
"""
api_router = APIRouter()
api_router.include_router(news.router, prefix="/news", tags=["news"])
