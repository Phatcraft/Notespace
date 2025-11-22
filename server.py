import os
from flask import Flask, render_template
from dotenv import load_dotenv
import mysql.connector

# Load enviroment
load_dotenv()

# Create Flask server
server = Flask(__name__)

# Connect to MySQL
conn = mysql.connector.connect(
  host=os.getenv("SQL_HOST"),
  user=os.getenv("SQL_USER"),
  password=os.getenv("SQL_PASS"),
  database=os.getenv("SQL_DATABASE")
)
cursor = conn.cursor()


# Home route
@server.route("/")
def home():
  return render_template("home.html")

# Login route
@server.route("/login")
def login():
  return render_template("login.html")

# Run server
if __name__ == "__main__":
  server.run(
    host=os.getenv("SERVER_HOST"),
    port=os.getenv("SERVER_PORT"),
    debug=True
  )