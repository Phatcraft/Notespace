const express = require('express');

// Read .env
require('dotenv').config()

// Server setup
var server = express()
server.set("view engine", "ejs")
server.set("views", "./templates")
server.use(express.static("./static"))

// Home route
server.get("/", (req, res) => {
  res.render("home")
})

// Login route
server.get("/login", (req, res) => {
  res.render("login")
})

server.listen(
  process.env.SERVER_PORT,
  process.env.SERVER_HOST,
  () => console.log("Server is running...")
)