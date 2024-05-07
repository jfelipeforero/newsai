import pathlib
import textwrap

import google.generativeai as genai
from core.config import settings

from IPython.display import display
from IPython.display import Markdown


def to_markdown(text):
    text = text.replace("•", "  *")
    return Markdown(textwrap.indent(text, "", predicate=lambda _: True))


genai.configure(api_key=settings.google_api_key)

model = genai.GenerativeModel("gemini-pro")


def generate_response(title: str):
    prompt_template = f"""Given the following title, return the 2 most important 2 
    keywords in the title with the following format: keyword1, keyword2:
    title: {title} 
    """

    response = model.generate_content(prompt_template)
    response = to_markdown(response.text)
    print(response)

    return response
