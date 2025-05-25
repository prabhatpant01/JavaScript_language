// Synchronous-->  In synchronous programming, tasks are executed one at a time, in a sequence. 
// Each task must complete before the next one begins. It follows a "blocking" approach.
console.log("First line Execute")

function myname(){
    console.log("Second line Execute Prabhat")
}

myname()

console.log("Third line Execute\n")

// Asynchronous-->  In asynchronous programming,tasks can begin and run in the background 
// while other tasks continue to execute. It follows a "non-blocking" approach.
console.log("Hello from the first line")

setTimeout(()=>{
    console.log("hello from the setTimeout function")

}, 4000)

console.log("hello from third line ")

