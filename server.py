import os
from flask import Flask, render_template
from dotenv import load_dotenv

# Create Flask server
server = Flask(__name__)

# Load enviroment
load_dotenv()

# Home route
@server.route("/")
def home():
  return render_template("home.html")


# Run server
if __name__ == "__main__":
  server.run(
    host=os.getenv("SERVER_HOST"),
    port=os.getenv("SERVER_PORT"),
    debug=True
  )