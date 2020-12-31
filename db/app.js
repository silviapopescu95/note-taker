// import util package
var util = require("util");
// import fs for reading and writing to files
var fs = require("fs");

// for reading and writing to files
var readFileAysnc = util.promisify(fs.readFile);
var writeFileAysnc = util.promisify(fs.writeFile);

// creates unique IDs for each note
const {v1 : uuidv1} = require('uuid');

class NotesApp {
    read() {
        //function to read notes
    }

    write() {
        //function to write notes
    }

    getNotes() {
        //function to get all notes
    }

    addNote() {
        //function to add a new note
    }

    deleteNote() {
        //function to delete a note by uuid created
    }
}

//exports NotesApp to be used by apiRoutes.js
module.exports = new NotesApp();