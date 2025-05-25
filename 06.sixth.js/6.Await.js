/** What is await?
The await keyword can only be used inside an async function. It pauses the execution of the function until 
the Promise it is waiting for is resolved or rejected. This allows you to write asynchronous code that looks synchronous. **/
console.log("\n")
console.log("Hello from the beginning")
async function printHelloAfterAwait(){
    console.log("Hello from first  line")
    
    let data = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Hello from callback function and waits here ")
        }, 3000)
    })

    let output = await data // start waiting for the data process to be Completed
    console.log(output)

    console.log("Hello from last line")
}
printHelloAfterAwait()
