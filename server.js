const express = require('express');

// Start read dotenv
require("dotenv").config()

// Create Express server
var server = express()
server.set("view engine", "ejs")
server.set("views", "./views")
server.use(express.static("./static"))

// Routes
server.get("/", (req, res) => {
  res.render("home")
})

// Run server
server.listen(
  port=process.env.SERVER_PORT,
  host=process.env.SERVER_HOST,
  () => console.log("Server is running....")
)