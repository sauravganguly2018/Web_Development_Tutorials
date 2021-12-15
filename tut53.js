console.log("This is my tutorial 66 ");
function greet(name, greettext = "Greetings from Javascript") {
    let name2 = "google"; //this is a local variable and it's scope is only upto the function
    console.log(greettext + " " + name);
    console.log(name + " is a good boy ");
}

function sum(a, b, c) {
    let d = a + b + c;
    return d;
    // This line will never be executed(Unreachable code)
    // console.log("return this statement");
}
let name = "saurav";
let name1 = "kundan";
let name2 = "gunjan";
let name3 = "shivam";
let name4 = "mohan";
let greettext2 = "Good Morning";
greet(name, greettext2);
greet(name1, greettext2);
greet(name2, greettext2);
greet(name3, greettext2);
greet(name4);
let returnval = greet(name1);
console.log(returnval);

let sum1 = sum(1, 4, 6);
console.log(sum1);
  // console.log( name + " is a good boy");
// console.log( name1 + " is a good boy");
// console.log( name2  + " is a good boy");
// console.log( name3 + " is a good boy");