const http = require('http');
const dt = require('./myfirstmodule')


http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    res.write(dt.myDateTime())
    res.end();
}).listen(3000, "127.0.0.1", () => {
    console.log('Hello');
})

