//open package.json==> edit script and
// do "start":"nodemon events.js"



/*

Nodejs follows an event driven architecture 
Every action on a pc is event
when a file is opened or a connection is built

*/

const fs = require('fs')

const rs = fs.createReadStream('./files/openFile.txt')
rs.on('open', () => { console.log('this file is open'); })