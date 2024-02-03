import sqlite3
import requests
import pandas as pd
from urllib.parse import urlencode
import os
from boto.s3.connection import S3Connection

api_key = os.getenv('GOOGLE_API_KEY')

# Connect to the SQLite database (it will be created if it does not exist)
conn = sqlite3.connect('my_database.db')

# Load the data into a pandas DataFrame
df = pd.read_csv('update_study_data.csv')

# Define a function to create tables (modify this according to your schema)
def create_table():
    # Drop the table if it exists
    conn.execute('DROP TABLE IF EXISTS study_spots;')
    # Create a new table
    conn.execute('''CREATE TABLE IF NOT EXISTS study_spots (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT NOT NULL,
                        lat REAL,
                        long REAL,
                        url TEXT,
                        building TEXT
                    );''')
    print("Table created successfully")

# Create the table
create_table()

# Insert the data into the database
df.to_sql('study_spots', conn, if_exists='append', index=False)

# Commit changes and close the connection
conn.commit()
conn.close()
