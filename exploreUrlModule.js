const url = require('url')
//lets fake the url and use url module to find various variable from url
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

const q = url.parse(adr, true)
console.log(q);

console.log(q.protocol);
console.log(q.host);
console.log(q.port);
console.log(q.hostname);
console.log(q.search);
console.log(q.pathname);
console.log(q.path);
console.log(q.href);
console.log(q.query);

//
console.log(q.query.year);
console.log(q.query.month);
