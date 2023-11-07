import os

from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS, cross_origin
import sqlite3

app = Flask(__name__, static_url_path='/', static_folder='./build')
CORS(app)  # <- Set up CORS for the entire app

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(err):
    return app.send_static_file('index.html')

@app.route('/<path:path>')
def static_proxy(path):
    # send all other requests to the React app to handle.
    file_name = path.split('/')[-1]
    dir_name = os.path.join(app.static_folder, '/'.join(path.split('/')[:-1]))
    return send_from_directory(dir_name, file_name)


@app.route('/api/study_spots')
def get_study_spots():
    # Connect to the SQLite database
    conn = sqlite3.connect('my_database.db')
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    # Execute a query to get all study spots
    cur.execute("SELECT * FROM study_spots")

    # Fetch all results
    rows = cur.fetchall()

    # Convert the rows into a list of dicts to jsonify it later
    study_spots = [dict(row) for row in rows]

    # Close the connection
    conn.close()

    # Return the list of study spots as JSON
    return jsonify(study_spots)

@app.route('/api/study_spots/building/<building_name>')
def get_study_spots_by_building(building_name):
    # Connect to the SQLite database
    conn = sqlite3.connect('my_database.db')
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    # Execute the query to get study spots by building name
    cur.execute("SELECT * FROM study_spots WHERE building = ?", (building_name,))

    # Fetch all results
    rows = cur.fetchall()

    # Convert the rows into a list of dicts to jsonify it later
    study_spots_by_building = [dict(row) for row in rows]

    # Close the connection
    conn.close()

    # Return the list of study spots by building as JSON
    return jsonify(study_spots_by_building)


if __name__ == '__main__':
    app.run(debug=True)
