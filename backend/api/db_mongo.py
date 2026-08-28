import os
import logging

logger = logging.getLogger(__name__)

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/infralogapm_db")

def get_mongo_db():
    """Fail-soft MongoDB connection helper."""
    try:
        from pymongo import MongoClient
        client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=2000)
        db = client.get_default_database()
        return db
    except Exception as e:
        logger.warning(f"MongoDB connection failed: {e}. Operating in SQLite single mode.")
        return None

def sync_to_mongo(collection_name, data_dict):
    """Asynchronously sync records to MongoDB if available."""
    try:
        db = get_mongo_db()
        if db is not None:
            db[collection_name].insert_one(data_dict)
            logger.info(f"Synced document to Mongo collection: {collection_name}")
    except Exception as e:
        logger.warning(f"Failed Mongo sync for {collection_name}: {e}")
