// import express
var express = require("express");
const path = require('path');
var fs = require("fs");

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
    fs.readfile('./db/db.json', `utf-8`, (err, data) => {
        return res.json(notes);
    })
});

app.post("/api/notes", (req, res) => {
    fs.writeFile('./db/db.json', 'utf8', (err, data) => {
        res.json(notes);
    })
})

// Start server
app.listen(PORT, function() {
    console.log('Listening on PORT: ' + PORT);
});
