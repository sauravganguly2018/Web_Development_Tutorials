// Synchronous or blocking
// - line by line execution

// Asynchronous or Non blocking
// - line by line execution not guaranteed
// - Callbacks will fire

const file=require('fs');
file.readFile('saurav.txt','utf-8', (err,data)=>{
    console.log(data);
});
console.log('This is a message..');