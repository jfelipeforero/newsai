import pathlib
import textwrap

import google.generativeai as genai

from IPython.display import display
from IPython.display import Markdown

def to_markdown(text):
  text = text.replace('•', '  *')
  return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

genai.configure(api_key="AIzaSyAXPMn-NH1PSj9zbyBT0rfUDQ9lkOah3z8") 

model = genai.GenerativeModel('gemini-pro')

def generate_response(title:str, content: str):
    prompt_template = f"""Provided with different reliable newspapers return 2 
    recent news related with the following news including source:
    title: {title}
    content: {content}
    """

    response = model.generate_content(prompt_template)

    print(response)

    response = to_markdown(response.text)
    
    return response 



