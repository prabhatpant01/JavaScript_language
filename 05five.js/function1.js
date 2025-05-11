// Higher Order function--> A function that takes another function as an argument or return a function.
//ex-1
function person(person2 ,name ,age, id){
    return person2(name, age, id)
}

// callback function
function myfn(name, age, id){
    return {name, age, id} // return an object with data
}
let res = person(myfn, "ankit", 23, 101)
console.log(res)


// ex-2
function calculate(operationfn, a, b){
    return operationfn(a, b)
}
// callback fn.
function add(x, y){
    return x + y;
}
function multiply(x, y){
    return x * y;
}
console.log(calculate(add, 5, 8)) // 13
console.log(calculate(multiply, 7, 5)) // 35


// ex-3
function greetfunction(){   // this is a anonymous function means no function name 
    return function(){          
        console.log("Radhe Radhe")
    }
}
let result = greetfunction()
console.log(typeof result) // function 
result() // Radhe Radhe ..... calling a result function




