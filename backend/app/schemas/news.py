from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field

"""
News schema definition
"""
class NewsBase(BaseModel):   
    publication_date: datetime = Field(default_factory=datetime.now)
    title: str 
    content: str

"""
News body definition
"""
    
class NewsBody(NewsBase):  
    pass

     
