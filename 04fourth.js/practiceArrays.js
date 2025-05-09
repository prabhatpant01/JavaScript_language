//Q1. Reverse an array
let num = [23, 34, 5, 56, 7, 3]
rev = num.reverse()
console.log(rev)

//Q2. Sort an array 
let num1 = [1, 8, 6, 0, 9, 5]
console.log(num1.sort()) // [ 0, 1, 5, 6, 8, 9 ]

let num2 = [23, 67, 3, 34, 5, 20, 1]
// console.log(num2.sort())// [1, 20, 23, 3, 34, 5, 67] sort want work here so we provide a logic of a sort an array.

num2.sort((a,b)=> a-b ) // sort in an ascending order
console.log(num2)

num2.sort((a,b)=> b-a ) // sort in descending order
console.log(num2) // [ 67, 34, 23, 20, 5, 3, 1]

// Do other methods push, pop etc...here
