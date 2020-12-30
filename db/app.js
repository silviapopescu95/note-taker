// import util package
var util = require("util");
// import fs for reading and writing to files
var fs = require("fs");

// for reading and writing to files
var readFileAysnc = util.promisify(fs.readFile);
var writeFileAysnc = util.promisify(fs.writeFile);