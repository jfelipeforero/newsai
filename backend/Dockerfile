FROM python:3.10

WORKDIR /app

COPY /app/requirements.txt /app

RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

COPY ./app /app

EXPOSE 8000

ENV GOOGLE_API_KEY="AIzaSyCMmMcxGKu1xQyCdSt65bQaRxWw46BcxtE"
ENV LAMBDA_URL="https://wp8vzjl1o8.execute-api.us-east-1.amazonaws.com/Prod/classify_digit"

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
