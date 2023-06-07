// Importing the required modules
const express = require('express');

require('dotenv').config(); //The dotenv module is used to load environment variables from a .env file into Node.js process.env object.
// By calling require('dotenv').config(), we are instructing the dotenv module to read the .env file and load the environment variables into the process.env object. Once loaded, these environment variables can be accessed within the application using process.env.VARIABLE_NAME syntax.

const db = require('./config/mongoose')
// Creating an instance of the express application
const app = express();

// Setting the port number for the server
const port = 7000 || process.env.port;
const multer = require('multer');


app.use(express.json()); // Middleware to parse JSON data in the request body
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data in the request body with extended mode enabled

app.set('view engine','ejs')


app.use(express.static('assets'));    //accesing static files from assets folder
app.use('/uploads',express.static(__dirname+'/uploads'));   //accesing uploaded files from uploads folder 

app.use(express.urlencoded({ extended: true })) 

// Mounting the routes
app.use('/', require('./routes/index'));

// Starting the server and listening on the specified port
app.listen(port, (err) => {
  if (err) {
    console.log("Error in starting server on Port", port);
  }
  console.log("Server Started on port 😊", port);
});
