// import express, path, fs, and util modules
var express = require("express");
var path = require('path');
var fs = require("fs");
// var util = require("util");

// import uuid for creating ids for new notes
const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());

// initialize Express app 
var app = express();

// Create a port for server
var PORT = process.env.PORT || 3300;

// Middleware for Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Middleware to serve our static files
app.use(express.static("public"));

// HTML Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/assets/js/index.js", (req, res) => {
    res.sendFile(path.join(__dirname, "./assets/js/index.js"));
});

// API Routes
app.get("/api/notes", (req, res) => {
  res.json(JSON.parse(fs.readFileSync("./db/db.json")));
});

app.post("/api/notes", (req, res) => {
    var currentNotes = JSON.parse(fs.readFileSync("./db/db.json"));
    var newNote = req.body;
    console.log(currentNotes);
    console.log(newNote);

    currentNotes.push(newNote);
    fs.writeFileSync(path.join(__dirname, "db/db.json"),JSON.stringify(currentNotes));
    res.send(currentNotes);
});

app.delete("/api/notes/:id", (req, res) => {
// delete not working, trying to use uuid to set id
});

// Starts server
app.listen(PORT, function() {
    console.log('Listening on PORT: ' + PORT);
});
