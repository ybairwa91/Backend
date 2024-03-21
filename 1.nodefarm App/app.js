const fs = require('fs');
const http = require('http')
const path = require('path');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate')


const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data);
console.log(dataObj);
const slugs = dataObj.map(el => slugify(el.productName, { lower: true }))
console.log(slugs);


////
http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);

    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {
            "Content-type": 'text/html'
        })

        const cardsHtml = dataObj.map(el =>
            replaceTemplate(tempCard, el)).join('')

    }
}).listen(8000, "", () => {
    console.log('Listening to request on port');
})