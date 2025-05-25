//What is async?
//The async keyword is used to declare a function as asynchronous. When a function is marked with async:
//1. It automatically returns a Promise, even if the function doesn’t explicitly return one.
//2. Within the function, you can use the await keyword to pause execution until a Promise is resolved or rejected.

async function process() {
    console.log("hello from here");
    return "done by process"; 
}
process().then((result) => console.log(result)); // prints "done"



async function process1(){ // Declares an asynchronous function. 
// This means it will always return a Promise, even if no value is explicitly returned.
    console.log("hello friends") 
    return "done-done by process1"
}
process1() // hello friends
console.log(process1) // [AsyncFunction: process]  with using async

process1().then((msg)=> console.log(msg)) // hello friends


