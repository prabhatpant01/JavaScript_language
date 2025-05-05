//Conditionals Statements: To implement some condition in the code.
//1. if statement 2. if else statement 3. else if statements.
let age = 20;

if (age >= 18){
    console.log("You can vote");
}
if (age < 18){
    console.log("You cannot vote");
}


// let mode = "light";
// let color;

// if (mode === "dark"){
//     color = "black";
// }
// else{
//     color = "white";
// }
// console.log("color :", color)

let num = 24;
if (num % 2 === 0){
    console.log(num, "is even");
}else{
    console.log(num,"is odd")
}


let mode = "light";
let color;

if (mode === "dark"){
    color = "black";
}
else if(mode === "pink"){
    color = "pink";
}
else if(mode === "blue"){
    color = "blue";
}
else{
    color = "white";
}
console.log("color :", color);


