// import express, path, fs, and util modules
var express = require("express");
var path = require('path');
var fs = require("fs");
var util = require("util");

const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());

// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid

// var readFileAsync = util.promisify(fs.readFile);
// var writeFileAsync = util.promisify(fs.writeFile);

// add routes as dependencies
// var apiRoutes = require("./routes/apiRoutes");
// var htmlRoutes = require("./routes/htmlRoutes");

// initialize Express app 
var app = express();

// Create a port for server
var PORT = process.env.PORT || 3300;

// Middleware for Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Middleware to serve our static files
app.use(express.static("public"));
// Middleware for routes
// app.use("/", htmlRoutes);
// app.use("/api", apiRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/assets/js/index.js", (req, res) => {
    res.sendFile(path.join(__dirname, "./assets/js/index.js"));
});

app.get("/api/notes", (req, res) => {
  res.json(JSON.parse(fs.readFileSync("./db/db.json")));
});

app.post("/api/notes", (req, res) => {
    var currentNotes = JSON.parse(fs.readFileSync("./db/db.json"));
    var newNote = req.body;
    // newNote.concat(`id: uuidv4()`)
    console.log(currentNotes);
    console.log(newNote);

    currentNotes.push(newNote);
    fs.writeFileSync(path.join(__dirname, "db/db.json"),JSON.stringify(currentNotes));
    res.send(currentNotes);
});

app.delete("/api/notes/:id", (req, res) => {
// delete not working, trying to use uuid to set id
});

// Start server
app.listen(PORT, function() {
    console.log('Listening on PORT: ' + PORT);
});
