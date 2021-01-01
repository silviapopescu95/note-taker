// // import Express module
// var express = require("express");

// // import app.js to be used here
// var notesApp = require("../db/app");

// // Create an array to hold information on notes
// var notesArray = [
//   {
//     notesTitle: "",
//     notesText: ""
//   }
// ];

// // creates a router for the app
// var router = express.Router();

// // Routes
// // GET all notes, "/api/notes"
// router.get("/api/notes", function(req, res) {
//    res.json(notesArray);
// });

// // POST for creating new note
// router.post("/api/notes", function(req, res) {
//    notesArray.push(req.body);
//     // logic to create a new note here
// });

// // DELETE for deleting a note based on id
// router.delete("/api/notes/:id", function(req, res) {
//     notesApp.deleteNote(req.params.id);
// });

// // exports the router
// module.exports = router;
