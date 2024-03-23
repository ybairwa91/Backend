/*
//INSTALL EXPRESS
const express = require('express');

//now we create an instance of express and store in the variable 
//called app.
const app = express();


//app has listen method to listen on specific port and 
//and a callback function which has error argument

// LISTENING SERVER
app.listen(8000, (error) => {
    if (error) return `Not established a connection`
    console.log('this is running on port 8000');
})

*/


/*
////////////////////////////////////////////////////////
// SEND RESPONSE


const express = require('express')
const app = express()

//routing 
  Routes are endpoint of the server,
  which configured on backend server,
  whenever someone access to those endpoint in url
  server respond accordingly
  ..simply saying ,route is a function that handles a specific url request

  for example define a route for a homepage and route for a contact page



  //basic syntax
app.METHOD(PATH, HANDLER)

METHOD is an HTTP request method.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.


 With app.get() we are configuring our first route,
 it requires two arguments first one is the path and,
 the second one is a function that will be executed when 
 anyone requests this path with GET method.
 request and response object as a parameter to all such types 
 of functions.
 request is an object we get from the user side in certain situation.
 response is also an object sent whenever a client(web browser)
  made a request
 in express res has status method called along with response

The send() method takes a string, object, array, or buffer as an argument and 
 is used to send the data object back to the client as an HTTP response, 


// GET REQUEST
   to retrieve data from the server

app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.listen(8000, () => {
    console.log('Listening on port 8000');
})


*/

/*
///////////////////////////////
// SEND PLAIN RESPONSE

const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})
app.listen(8000, () => {
    console.log('Listening on port 8000');
})

*/

/*
/////////////////////////
// SEND JSON FILE

const express = require('express')
const app = express()


app.get('/', (request, response) => {
    response.status(200).json({
        message: 'Hello World',
        userId: 1921920
    })
})

app.listen(8000, () => {
    console.log('Listening on port 8000');
})



// SEND JSON FILE
const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.status(200).json({
        "message": 'Hello World',
        "userId": 1921920
    })
})
app.listen(8000, () => {
    console.log('Listening on port 8000');
})

*/

/*
////////////////////////////////
//SEND HTML FILE


const express=require('express);
const app=express()

app.get('/',(req,res)=>{
    res.set('Content-type':'text/html')
    res.status(200).send('<h1>This is html element</h1>')
})


*/



/*
///////////////////////////////////////
// MORE ROUTING


const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.status(200).send('This is Overview Page')
})
app.get('/hello', (request, response) => {
    response.status(200).send('this is hello page')
})
app.get('/product', (req, res) => {
    res.status(200).send('This is product page')
})
app.listen(3000, () => {
    console.log('Listening on port 3000');
})

*/



