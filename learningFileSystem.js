/*
////////////////////////
// FILE SYSTEM
   The File System module provides a way of working with the computer's file system.
   we can read file from computer system,delete file,edit file content or infact delete the file as well.

   Read files
   Create files
   Update files
   Delete files
   Rename files

*/
/*

// INSTALLING FILE MODULE
const fs = require('fs')



// READING FILE CONTENT 
const output = fs.readFileSync('./files/readFile.txt', 'utf-8');//[first param is about path,second is format]
console.log(output);




// WRITING TO A FILE
const input = fs.writeFileSync('./files/writeFile.txt', 'Hello i have written this directly using nodejs');//[first param is about path of file,second param about what to write]



// CREATING A FILE
//1.appendFile() method
//it creates both file and append(add) content to it 

const content = 'this content is created by appendFile method '
fs.appendFileSync('./files/appendFile.txt', content)

//2.Open() method is asynchronuous method 
//(first param is path,second param is code for writing is w,
//,third param is callback fn which has certain functionalities)
fs.open('./files/openFile.txt', 'w', (err, file) => {
    console.log('saved');
})

//3.writeFile() method--mostly used one
//same as appendFile but it will delete existing file or data if pre-exists
fs.writeFileSync('./files/writeFile.txt', content.replace('appendFile', 'writeFile'));



// UPDATING
// methods--appendFile(),writeFile()

//appendFile()
//it add to end of pre-exist content of existed file
fs.appendFileSync('./files/appendFile.txt', 'this content is appended or saying updated using same append method')

//writeFile()
fs.writeFileSync('./files/writeFile.txt', 'it deleted preexisted data and update from scratch')



// RENAME 
fs.renameSync('./files/myFile.txt', './files/myrenameFile.txt')


// DELETE using unlink function
fs.unlinkSync('./files/delete.txt')

* /

/*
///////////////////////////////
// SYNCHRONOUS VS ASYNCHRONOUS
 ..we done all file system operation synchronously means they execute top to bottom and one by one 
 ..and next function doesnot execute until you execute the ongoing
 BUT
 ..nodejs is asynchronous language and its work asyncronously with the help of callback functions
 ..lets achieve all the task using asynchronous calls
 ..Blocking vs non-blocking nature of nodejs
 ..nodejs use single thread so asynchronous help to rescue from blocking codes

*/

// ASYNCHRONOUS CALL
const fs = require('fs')

// NOTE:-whatever execute initially it will execute first and no predefined order to execute.

// READING A FILE
fs.readFile('./files/readFile.txt', 'utf-8', (err, data) => {
    console.log(data);
})
// .they do have callback function as 3rd argument and u can get input by data argument

// WRITING A FILE
fs.writeFile('./files/writeFiles.txt', 'i am writting this using writeFile function ', (err) => {
    if (err) return `Something went wrong`;
})

// CREATE FILES

// 1.appendFile()
// (it created the file and save the content to it as u mentioned)
fs.appendFile('./files/appendFieldAsync.txt', 'Hello content-1', (err) => {
    if (err) throw err;
    console.log('saved');
})

// 2.openFile()
// (it will create open file for writting using w flag)
fs.open('./files/openFileAsync.txt', 'w', (err, file) => {
    if (err) throw err;
    console.log('saved');
})

// 3.writeFile()
// (it replace content to existing file if exists,
//  and if mention path of file not exist it will create one and add content to it)

fs.writeFile('./files/createFile.txt', 'hello content-2', (err) => {
    if (err) throw err;
    console.log('saved');
})


// UPDATING FILE
// we can use add content to pre-exist file or we can replace the whole content from it
// both can we achieved using appendFile() and WriteFile() method as we done earlier


// RENAME FILE
fs.rename('./files/writeFiles.txt', './files/myrenamedFile2', (err) => {
    if (err) throw err;

})

