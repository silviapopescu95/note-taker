// import express
var express = require("express");

// add routes as dependencies
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");

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
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);


// Start server
app.listen(PORT, function() {
    console.log('Listening on PORT: ' + PORT);
});
