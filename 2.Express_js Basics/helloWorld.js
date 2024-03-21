/*
//INSTALL EXPRESSJS
const express = require('express');

//now we create an instance of express and store in the variable 
//called app.
const app = express();


//app has listen method to listen on specific port and 
//and a callback function which has error argument
app.listen(8000, (error) => {
    if (error) return `Not established a connection`
    console.log('this is running on port 8000');
})

*/

//sending hello world as a response
const express = require('express')
const app = express()

//routing and sending hello world plain text
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})
app.listen(8000, () => {
    console.log('Listening on port 8000');
})