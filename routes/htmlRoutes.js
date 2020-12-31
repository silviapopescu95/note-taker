// import path package to get the correct file path for our html
var path = require("path");
// import Express
var express = require("express");

// creates a router for the app
var router = express.Router();

// Routes
// HTML GET requests
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// defaults to home
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// exports the router
module.exports = router;