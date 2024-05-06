import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def main() -> None:
    logger.info("Initializing service")
    # DB initialization
    logger.info("Service finished initializing")


if __name__ == "__main__":
    main()
