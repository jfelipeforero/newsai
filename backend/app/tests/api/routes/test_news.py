from unittest.mock import patch

from fastapi.testclient import TestClient


def test_verify_news(client: TestClient) -> None:
    title = ""
    content = ""
    data = {"title": title, "content": content}
    response = client.post(
        "http://127.0.0.1:8000/news/validate",
        json=data,
    )
    assert response is True
