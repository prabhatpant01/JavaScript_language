//console.log is used to log(print) a message to the console.
//variables are containers for data.
/*variables names are case sensitive.S and s are different
  only letters,digits and underscore(_) and $ is allowed.
  only letters, $ and underscore(_) should be 1st character.
  Reserved words cannot be a variable name.*/

/*var - variable can be re-declared & updated. A global scope variable. It support hoisting
let - variable cannot be re-declared but can updated. A block scope variable. it doesn't support hoisting
const - variable cannot be re- declared or updated. A block scope variable.
*/

/*Data types in JS(Primitive) means immutable: Number, String, Boolean, Undefined, Null, BigInt, Symbol. 
Non-Primitive means mutable and complex: objects*/



{var a = 3; 
 var a = 6;
    a = 4;
    console.log(a);
}

{let a = 7;
// let a = 4;  //wrong
    a = 9;
    console.log(a);
}

{const a = 12;
    console.log(a);
}


// Primitive data types examples :
// 1. Number : The `Number` data type is used to represent numerical values, including integers and floating-point numbers.
var a = 21
var b = 1.2
console.log(b)
console.log(typeof b)

// 2. String : It is a sequence of characters written in a inverted commas 
var x = "Ankit"
var y = "13232"
console.log(typeof y)

// 3. BigInt : 'n' indicates that it is a valid Big number for a Big Intiger.
var bigint = 234n
console.log(typeof bigint)

// 4. NaN(Not a number) : Its a Number data type which is a bug in JS
console.log(typeof NaN)

// undefined vs null : undefined means you have defined a variable but not assigned a value while 
// null means purposefully don't want to assign a value into a variable. 

// 5. undefined 
var name 
console.log(name)

// 6. Null --> typeof null is object which is a JS bug
console.log(typeof (null))

// 7. Boolean 
console.log(typeof true)

// 8. Symbol data type
var s1 = Symbol()
console.log(typeof s1)

// Non Primitive data type(objects--> In JavaScript, an **object** is a collection of key-value pairs, 
// where the key is a string (or symbol) and the value can be data (like numbers or strings) or functions (called methods). 
// Objects help organize and group related data and functionality together.) Example 
//Q1. Create a const object called Product.
const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 260,
};
console.log(product);
// two way of accessing values using key : 1 dot notation and 2 square brakets inside single quotes.
console.log(product.title);
console.log(product['title']);
// add data in object
product.color = "blue"; // or product["color"] = "red";
console.log(product)
// delete data in the object
delete product.color
console.log(product)

//Q2. Create a const object called Profile.
const profile = {
    userName: "Prabhat",
    isfollow: true,
    followers: 233,
    following: 223,
};
console.log(profile);

//Q3. modify profile object userName in Q2 
profile["userName"] = "AMAN"
console.log(profile)

// What HOISTING really means :
/** In simple terms, hoisting in JavaScript means that variable and function declarations are moved to the top of their scope before the code runs. 
This happens behind the scenes,so you can use variables or functions before they're actually written in the code.**/

// 1. Function Hoisting: Entire function declarations are hoisted to the top of their scope. 
// This means you can call a function before it’s defined in the code
greet();
function greet() {
    console.log("Hello, world!"); // Hello, world!
}

// 2. Variable Hoisting: Variables declared with var are hoisted, but only their declarations, not their assignments.
console.log(a); // undefined
var a = 5;
// Here, a is hoisted but not its value (5).
// Variables declared with a and  are also hoisted but are kept in a "temporal dead zone" from the start of the block until the declaration is encountered. 
// This means you cannot access them before they are declared.

console.log(b1); // ReferenceError
let b1 = 10;
// 3. Class Hoisting: Like let and const, class declarations are also hoisted but reside in the temporal dead zone. 
// They cannot be used before being declared.









