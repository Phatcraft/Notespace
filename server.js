const express = require('express');

// Read .env -> to process.env
require('dotenv').config()

// Server setup
var server = express()
server.set("view engine", "ejs")
server.set("views", "./templates")
server.use(express.static("./static"))

// UI Router
const UIRouter = require("./routers/UIRouter")
server.use(UIRouter)

// Run server
server.listen(
  process.env.SERVER_PORT,
  process.env.SERVER_HOST,
  () => console.log("Server is running...")
)