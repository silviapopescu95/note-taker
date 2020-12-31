// Create an array to hold information on notes
var notesArray = [
  {
    notesTitle: "",
    notesText: ""
  }
];

// import app.js to be used here
var notesApp = require("../db/app");

// Routing
module.exports = function(app) {
    // GET all notes, "/api/notes"
    app.get("/api/notes", function(req, res) {
        res.json(notesArray);
    });

    // POST for creating new note
    app.post("/api/notes", function(req, res) {
        // logic to create a new note here
    });

    // DELETE for deleting a note based on id
    app.delete("/api/notes/:id", function(req, res) {
        notesApp.deleteNote(req.params.id);
    });
};

