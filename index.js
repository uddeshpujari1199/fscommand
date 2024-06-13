const fs = require('fs');
fs.writeFileSync("first.txt","Task 1");
console.log("file created")

const readFile=fs.readFileSync("first.txt","utf-8");
console.log(readFile);

const addData=fs.appendFileSync("first.txt"," task 1 complted")

fs.unlinkSync('first.txt')


