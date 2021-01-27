//Empty JS object to act as endpoint for all routes
projectData = {};

//Express to run server and routes (remember to install first-npm install express)
const express = require("express");

//Start up an instance of an app
const app = express();

//*Dependencies*
const bodyParser = require("body-parser");
//*Middleware*
//configure express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//cors for cross origin allowance
const cors = require("cors");
//connect Cors to the express app instance.
app.use(cors());

/* Initializing the main project folder */
app.use(express.static("website"));

//set port variable
const port = 8000;

//spin up the server
//server variable declared and run using arrow function, for e.g.
const server = app.listen(port ())=>{
  console.log(`running on localhost: ${port}`)
};

//GET
//create empty javascript object
/* const appData = {};
//return javascript object when GET request is made
app.get("/addMovie", function (req, res) {
  res.send(appData);
}); */

//POST - MOVIE EXAMPLE
//create an array to hold data
const data = []; //data array
//create post() (express methos) with url path and a callback function
app.post("/addMovie", addMovie);
//add data received from request.body
function addMovie(req, res) {
  data.push(req.body); //addMovie will take the info from req.body, and push into data array
  console.log(data);
};
