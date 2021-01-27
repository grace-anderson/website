//app.js is the client side javascript

//this is the code to mape a POST request to a route
const postData = async (url = "", data = {}) => {
  // the url is where the post is made to
  console.log(data);
  const response = await fetch(url, {
    // this is a POST route set up with a const variable of response
    method: 'POST',  //here is POST, could also be GET, PUT, DELETE etc
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json', //the application is running JSON data type
    },
    // Body data type must match "Content-Type" header - i.e. JSON data type
    body: JSON.stringify(data), //JSON.stringify converts the server data (data type string) to JSON data
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error); //appropriately handle the error
  }
};

postData("/addMovie", { movie: " the matrix", score: 5 });
