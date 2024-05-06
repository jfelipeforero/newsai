from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    google_api_key: str = ""
<<<<<<< HEAD
    lambda_url: str= ""
=======
    lambda_url: str = ""

>>>>>>> a529ac30160cc40fe75fac9b8ff2395d59536145
    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()
