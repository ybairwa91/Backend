/*
CONTENT
   1.ALL METHODS
   2.MIDDLEWARE
   3.ROUTES


HTTP METHODS
   see for different type of request we do have different methods

GET
   To retrieve information from the server
POST
   To create a new resource on the server
PUT
   To update an existing resource on the server
PATCH
   To update an existing resource on the server Partially
DELETE
   To delete an existing resource on the server


*/

//////////////////////////////////


/*
// GET REQUEST METHOD


const express = require('express')
const app = express();

GET
   it basically take get request from client and process accordingly
   read only,you can only retrieve data from the server and nothing else

//GET request
// If we run our application and go to localhost:3000/hello,
// the server receives a get request at route "/hello",
//our Express app executes the callback function attached
//to this route and sends "Hello World!" as the response.

app.get('/hello', (req, res) => {
    res.status(200).send('HELLO World!')

})

const port=3000;
app.listen(port,()=>{
    console.log('server running on port ' + port )
})


*/


////////////////////////////////


/*
//NOTE:-WE CAN HAVE DIFFERENT METHODS ON THE SAME ROUTE
// POST REQUEST TO RETRIEVE DATA


const express = require('express')
const app = express();


app.get('/hello', (req, res) => {
    res.status(200).send('HELLO World!')
})


//when we want to send data to the server from client side(a web browser)
//ie suppose u want to login on fb id page then u send id and pass to server
//then server respond according to your data sent


app.post('/hello', (req, res) => {
    res.status(200).send(`Hello this is a post request`)
})

const port = 3000;
app.listen(port, (err) => {
    if (err) throw new Error;
    console.log(`Listening on Port ${port}`);
})

*/

///////////////////////////////

/*
// RETRIEVE DATA FROM CLIENT USING POST REQUEST

const express = require('express')
const app = express();


//Install middleware
app.use(express.json())


app.get('/hello', (req, res) => {
    res.send(200).status('Hi this is get request')
})

// Open postman call this post url
// go to body and then raw section,create an json file with
// variable name and id and fetch the value here

app.post('/hello', (req, res) => {
    const { name, id } = req.body;
    res.status(200).send(`My name is ${name} and id is ${id}`)
})


const port = 3000;
app.listen(port, (err) => {
    if (err) throw new Error;
    console.log(`Listening on Port ${port}`);
})

*/

////////////////////////////////


/*


//MIDDLEWARES
//piece of code that runs between request-response cycle
//see when a client(a web browser) make a request than it will
//goes to DNS for ip address ,HTTP connects the client and server
//then response hits
//Now middleware always run in this cycle
//here we hold a post on our /hello url
//when someone call for this url it made a request now
//express json middleware parse the requested data Object and convert into
//json
//app.use () to install midlleware

const express = require('express')
const app = express();


//to use middleware used app.use
//it helps to parse request object data into json data
app.use(express.json())


app.get('/hello', (req, res) => {
    res.send(200).status('Hi this is get request')
})


app.post('/hello', (req, res) => {
    const { name, id } = req.body;
    res.status(200).send(`My name is ${name} and id is ${id}`)
})


const port = 3000;
app.listen(port, (err) => {
    if (err) throw new Error;
    console.log(`Listening on Port ${port}`);
})

*/

//////////////////////////////////////////////


/*
// UPDATING DATA USING PUT AND PATCH METHODS


const express = require('express')
const app = express();

app.use(express.json())

app.get('/get', (req, res) => {
    res.send(200).status('Hi this is get request')
})

app.post('/post', (req, res) => {
    const { name, id } = req.body;
    res.status(200).send(`My name is ${name} and id is ${id}`)
})

// PUT
//TO UPDATE DATA on the server basically



app.put('/put/:id', (req, res) => {
    // req.param is basically a
    // method on request object to get the parameter which
    //has id property
    const putId = req.params.id;
    const name = req.body.name;
    const updatedId = req.body.id

    res.status(200).send(`We updated id from ${putId} to ${updatedId}`)

})

// PATCH METHOD
   //update things partially

app.patch('/patch/:id', (req, res) => {
    const userId = req.params.id;
    const updates = req.body;

    res.sendStatus(204);

});

//LISTENING SERVER
const port = 3000;
app.listen(port, (err) => {
    if (err) throw new Error;
    console.log(`Listening on Port ${port}`);
})

*/

////////////////////////////////////////////////////////////

/*

// One More example

const express = require('express')
const app = express();

app.use(express.json());

app.get('/api/resource', (req, res) => {
    const resource = { id: 1, name: 'Resources' }
    res.status(200).send(resource)
})

app.put('/api/resource', (req, res) => {
    const updatedResource = { id: 1, name: 'Updated Resource' }
    res.status(200).send(updatedResource)
})

app.patch('/api/resource', (req, res) => {
    const updateResource = { name: "updated resource" }
    res.status(200).send(updateResource)
})

app.listen(3000, (req, res) => {
    console.log('Listening on port 3000');
})
*/

////////////////////////////////////////////////////////


/*

//DELETE REQUEST


const express = require('express')
const app = express();

app.use(express.json());

app.get('/api/resource', (req, res) => {
    const resource = { id: 1, name: 'Resources' }
    res.status(200).send(resource)
})

app.put('/api/resource', (req, res) => {
    const updatedResource = { id: 1, name: 'Updated Resource' }
    res.status(200).send(updatedResource)
})

app.patch('/api/resource', (req, res) => {
    const updateResource = { name: "updated resource" }
    res.status(200).send(updateResource)
})

app.delete('/api/resource', (req, res) => {
    res.status(200).send('Resource is deleted')
})

app.listen(3000, (req, res) => {
    console.log('Listening on port 3000');
})



*/