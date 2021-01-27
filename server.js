//this is the server side javascript

/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require("express");

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static("website"));

//set port variable
const port = 8000;

//spin up the server
/* Spin up the server*/
const server = app.listen(port, listening);
function listening() {
  // console.log(server);
  console.log(`running on localhost: ${port}`);
}

//GET
//create empty javascript object
//const appData = {};
//return javascript object when GET request is made
app.get("/addMovie", sendData);

function sendData(req, res) {
  res.send(projectData);
}

//POST - MOVIE EXAMPLE
//create an array to hold data
const data = []; //data array
//create post() (express method) with url path and a callback function

app.post("/addMovie", function (request, response) {
  let data = request.body;
  projectData = request.body;
  console.log(data);
});
