// Error: A mistake in your code that prevents it from working correctly 
// (like a typo or trying to use something that doesn’t exist). For example, referencing an undefined variable. 
// Exception: A special type of error that occurs while your code is running. It can be handled or managed so
// your program doesn’t crash completely. For example, trying to divide by zero and catching it to show a proper message.


// console.log("hello" // syntax error

try{
    let x = 5 / 0;
    console.log("Result:", x); // Will execute even though dividing by zero is meaningless
} catch (error) {
    console.error("An error occurred:", error.message);
}    
finally{
    console.log("i handled it ") 
}
