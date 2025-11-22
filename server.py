from flask import Flask

# Create Flask server
server = Flask(__name__)

# Home route
@server.route("/")
def home():
  return "Home page"


# Run server
if __name__ == "__main__":
  server.run(
    host="0.0.0.0",
    port=3000,
    debug=True
  )