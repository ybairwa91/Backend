// INSTALL
const http = require('http');
/*

// SERVER
Server is something saying a device or program that provides functionalities to other program,
as the name implies which serve something.
Here server  provides resources,services or data to other computer,devices or program.
Basically there are 2 parties one [client] request to some functionalities which listen by server and then proceed it
further


// WEB SERVER
Hardware or software or both working together
Hardware side--in hardware side web server is your own computer which contains files for web application ie.html,css....
Software side: a web server includes several parts that control how web users access hosted file


Suppose you as a client(web browser) ask to request for a file to get on your desktp,you do download and store
in your pc(this is basic glimpse of web server)






//first program

// CREATING A SERVER
// SEND HELLO WORLD RESPONSE
const server = http.createServer((req, res) => {
    res.end('hello World!')
})

server.listen(3000, '127.0.0.1', (err) => {
    console.log('you are listening on 3000 port');
})

// CREATING A SERVER
// SEND HELLO WORLD RESPONSE
const server = http.createServer((req, res) => {
    res.end('hello World!')
})

server.listen(3000, '127.0.0.1', (err) => {
    console.log('you are listening on 3000 port');
})


// Create a server object
const server = http.createServer((req, res) => {
    res.write('Hello World!') //writting respone to the client
    res.end() //end the response
})

server.listen(3000, '', () => {
    console.log('listening on port 3000');
})


//let refractor same
http.createServer((req, res) => {
    res.write('Hello World')
    res.end()
}).listen(3000, '', () => {
    console.log('listening on 3000 port');
})

// SEND RESPONSE IN DIFFERENT DOC TYPE
//here we send response is basically plain text,what if we want to send response as HTML
//lets look into HTTP headers
//res has writeHead function which take statusCode as firs param and
//second param as content-type which send different type of document to client .


http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': "text/html"
    })
    res.write('Hello World!')
    res.end()
}).listen(3000, '127.0.0.1', () => {
    console.log('Hello world');
})


// READ THE QUERY STRING
// req.url
// it provides url after the domain

http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    console.log(req.url);
    res.write(req.url)
    res.end()
}).listen(3000, '', () => {
    console.log('You are listening on port 3000');
})



///////////////////////////////////////////////
// PARSING VARIABLES FROM URL
// using another package url which parse url and provide us an object with certain details

// Learn some terms here
// 1. after ? we have query
// after just domain we do have pathname
// 127.0.0.1/3000/pathname?id=query&query2
const url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    let q = url.parse(req.url, true)
    console.log(q);
    res.end();
}).listen(3000, '', () => {
    console.log('You are listening on port 3000');
})




// DESTRUCT THE URL
const url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    let q = url.parse(req.url, true)
    const { pathname, query } = q;
    console.log(query);
    console.log(pathname);
    res.end('hello');
}).listen(3000, '', () => {
    console.log('You are listening on port 3000');
})



////////////////////////////
// ROUTING
// sending different template or resonse for different url how lets c

const url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    if (req.url === '/') {
        res.end('this is main page')
    }
    if (req.url === '/overview') {
        res.end('This is overview page')
    }
    if (req.url === '/contact') {
        res.end('this is our contact page')
    }
    res.end('this is not right url')
}).listen(3000, '127.0.0.1', () => {
    console.log('You are listening on port 3000');
})

//This is routing


const url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    const { pathname } = url.parse(req.url, true)
    
    if (pathname === '/') {
        res.end('this is main page')
    }
    if (pathname === '/overview') {
        res.end('This is overview page')
    }
    if (pathname === '/contact') {
        res.end('this is our contact page')
    }
    res.end('this is not right url')
}).listen(3000, '127.0.0.1', () => {
    console.log('You are listening on port 3000');
})

*/


