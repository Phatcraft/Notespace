const express = require('express');
const UIRouter = express.Router()

// Home route
UIRouter.get("/", (req, res) => {
  res.render("home")
})

module.exports = UIRouter