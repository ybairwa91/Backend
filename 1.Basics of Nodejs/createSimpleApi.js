const http = require('http')
const fs = require('fs')
/*


 http.createServer((req, res) => {
    console.log(req.url);
    const pathName = req.url;
    if (pathName === "/" || pathName === "/overview") {
        res.end("this is overview");
    } else if (pathName === "/product") {
        res.end("this is our product");
    } else if (pathName === "/api") {
        fs.readFile('./data.json', "utf-8", (err, data) => {
            const productData = JSON.parse(data);
            res.writeHead(200, {
                "Content-type": "application/json",
            });
            console.log(productData);
            res.end(data);
        });
    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
            "my-own-header": "hello world",
        });
        res.end("<h2>Page Not Found!</h2>");
    }
}).listen("3000", "127.0.0.1", () => {
    console.log("listening to request on port 8000");
});

*/
///here 127.0.0.1:3000/api is api that u can share to anyone and it can be accessed.

//Learn one concept that to not block our nodejs one single thread we should read our file outside of server and 
//read synchronously
//lets do it
const data = fs.readFileSync('./data.json', "utf-8");
const dataObj = JSON.parse(data)


http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === "/" || pathName === "/overview") {
        res.end("this is overview");
    } else if (pathName === "/product") {
        res.end("this is our product");
    } else if (pathName === "/api") {
        res.writeHead(200, {
            "Content-type": "application/json",
        });
        res.end(data);

    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
            "my-own-header": "hello world",
        });
        res.end("<h2>Page Not Found!</h2>");

    }

}).listen("3000", "127.0.0.1", () => {
    console.log("listening to request on port 8000");
});