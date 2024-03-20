const http = require('http')
const fs = require('fs')
const url = require('url')


http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let pathname = "." + q.pathname;

    fs.readFile(pathname, (err, data) => {
        if (err) {
            res.writeHead(404, {
                'content-type': 'text/html'
            })
            return res.end('404 not found')
        }
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write(data)
        return res.end()
    })

}).listen(3000, '127.0.0.1', () => {
    console.log('listening on port 3000');
})