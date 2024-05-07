from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    google_api_key: str = ""
    lambda_url: str = ""
    sentiment_analysis_lambda_url:str = ""

    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()
