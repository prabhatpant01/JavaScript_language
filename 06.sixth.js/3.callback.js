//callback---> a callback is a function that is passed as an argument to another function. 
// It allows you to control the sequence of code execution, particularly in asynchronous operations. 
// The receiving function executes the callback function at a specified time, like when an operation is complete or when a certain condition is met.

function greet(name ,innerfun){       // innerfun is a callback function 
    let greeting = "hello " + name
    innerfun(greeting)
}
function myfun(message){
    console.log(message)
}
greet("Prabhat", myfun)

// callback hell / Pyramid of DOOM-- > Callback hell in JavaScript refers to a situation where multiple nested callback functions are used, 
// leading to code that becomes difficult to read, maintain, and debug. 
// This typically happens when asynchronous operations are chained together using callbacks.
// we can avoid callback hell in two ways: Promises and Async/Await

firstFunction(result => {
    secondFunction(result, newResult => {
        thirdFunction(newResult, finalResult => {
            console.log(finalResult);
        });
    });
});
