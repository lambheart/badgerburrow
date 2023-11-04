import sqlite3
import requests
import pandas as pd

api_key = 'AIzaSyB0DSQyxeTXhJzRNEVwQ3khFG7QHX53Yxo'

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
                        latitude REAL,
                        longitude REAL,
                        url TEXT,
                        building TEXT
                    );''')
    print("Table created successfully")

# Function to get latitude and longitude from Google Maps API
def get_lat_lng(address, api_key):
    GOOGLE_MAPS_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json'
    params = {
        'address': address,
        'key': api_key
    }
    response = requests.get(GOOGLE_MAPS_API_URL, params=params)
    if response.status_code == 200:  # A successful request
        res = response.json()
        if res['results']:
            location = res['results'][0]['geometry']['location']
            return location['lat'], location['lng']
    return None, None

# Iterate over the DataFrame and update it with latitude and longitude
for index, row in df.iterrows():
    lat, lng = get_lat_lng(row['building'], api_key)  # Assumes 'building' column contains the address
    df.at[index, 'latitude'] = lat
    df.at[index, 'longitude'] = lng
# Create the table
create_table()

# Insert the data into the database
df.to_sql('study_spots', conn, if_exists='append', index=False)

# Commit changes and close the connection
conn.commit()
conn.close()
