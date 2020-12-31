// import path package to get the correct file path for our html
var path = require("path");

// Routing
module.exports = function(app) {
    // HTML GET requests
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // defaults to home
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
}