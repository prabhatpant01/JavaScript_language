//Functions : It is a Block of code that performs a specific task, can be innvoked(call) whenever we needed.
/*Function definiton Syntax : function functionName(param1, param2){
    //do some work
} 
Function call : functionName();
*/

function myFunction(){
    console.log("hello i am learning JS");
    console.log("want to learn");
}

myFunction();

/*Local variables : It is a variables that are declared inside of a function or loop.
Since they are declared inside of the function, they belong only to that one function and no other functions. */
function sum(a, b){ // parameters
    x = a+b;
    console.log("x =",x);
    return x;
}
sum(2, 3); // arguments

// Arow Functions----> Compact way of writing a function.
/* syntax : const functionName =(pram1, param2..)=>{
    //do some work
} */

let mulFunction = (x, y)=>{    // here mulFunction is just a variable. we can also store value in it.
   return x*y;
}
val = mulFunction(53,43)
console.log("multiplication of two numbers :", val);

// Main Difference between arrow function and regular function is that
// we cant use argument object in arrow function while we can use it in regular function.
// For example:
function myname(){
    var myname = "ram"
    console.log("my name is : ", myname)
    console.log(arguments)
}   
myname(1, 3, 5, 7, 9); // arguments is a object that is used to store all the arguments passed to the function. 

// But if we use arrow function then it will give error.
let mynum = () =>{
    console.log(arguments)
}
mynum(1, 3, 5, 7, 9); // Uncaught ReferenceError: arguments is not defined
// So, we can't use arguments object in arrow function.
