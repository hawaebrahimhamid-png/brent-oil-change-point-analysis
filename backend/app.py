from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load data
prices = pd.read_csv("data/prices.csv")
events = pd.read_csv("data/events.csv")
change_points = pd.read_csv("data/change_points.csv")


@app.route("/")
def home():
    return jsonify({
        "message": "Brent Oil Dashboard API"
    })


@app.route("/prices")
def get_prices():
    return jsonify(prices.to_dict(orient="records"))


@app.route("/events")
def get_events():
    return jsonify(events.to_dict(orient="records"))


@app.route("/change-points")
def get_change_points():
    return jsonify(change_points.to_dict(orient="records"))


if __name__ == "__main__":
    app.run(debug=True)
