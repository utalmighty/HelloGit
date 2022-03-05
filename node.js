//alert("HI");
const fs = require("fs"); // import fs as fs
// fs is File System library
// if there is something which is expoted (type of return) that is put in varible.
// to we use module.exports= in lib code;
const object = require("./class");
// object.obj // you can not access it because we didnt exported anything

fs.appendFileSync("f1.txt", "Second append."); // Synchronous function are denoted by Sync at last of name.
let data = fs.readFileSync("f1.txt");
console.log(data); // Printed as an buffer object (Encoded).
// to concert into String just type convert
// We understand utf-8.
console.log(data+"");
let data1 = fs.readFileSync("f1.txt", "utf-8");
console.log(data1);