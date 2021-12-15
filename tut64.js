const file=require("fs");
let textr= file.readFileSync('saurav.txt','utf-8');
textr=textr.replace('how','who');
console.log(textr);
console.log('writing file of saurav.txt into kundan.txt ...');
file.writeFileSync('kundan.txt',textr);