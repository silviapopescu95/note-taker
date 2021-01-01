// // import util package
// var util = require("util");
// // import fs for reading and writing to files
// var fs = require("fs");

// // for reading and writing to files
// var readFileAsync = util.promisify(fs.readFile);
// var writeFileAsync = util.promisify(fs.writeFile);

// // creates unique IDs for each note
// const uuid = require("uuid");

// class NotesApp {
//     read() {
//         //function to read notes
//       var readNotes = readFileAsync("db/db.json", "utf-8");
//       return readNotes
//     }

//     write(note) {
//         //function to write notes
//         var writeNotes = writeFileAsync("db/db.json", JSON.stringify(note));
//         console.log(writeNotes);
//         return writeNotes
//     }

//     getNotes() {
//         //function to get all notes
//         var getAllNotes = this.read();

//         return getAllNotes
//     }

//     addNote(note) {
//         // creates note object
//         var { title, text } = note;

//         // input validation
//         // if (!title || !text) {
//         //     console.log("Must have inputs for both title and text.");
//         // }

//         // create new note with uuid
//         // var newNote = { title, text, id: uuid.v1() };
//     }

//     deleteNote() {
//         //function to delete a note by uuid created
//     }
// }

// //exports NotesApp to be used by apiRoutes.js
// module.exports = new NotesApp();