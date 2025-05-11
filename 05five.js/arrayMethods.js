/*forEach loop in arrays : It is a method that executes a provided function once for each array element. The forEach() method is a non-mutating method, which means it does not change the original array.

It takes 3. Arguments: current value, index, arr.

It is a HIGHER ORDER FUNCTION / METHODS.
arr.forEach(callBackFunction)
callBackFunction: Here, it is a function to execute for each element in the array.
A callBack is a function passed as an argument to another function.

arr.forEach((val)=>{
    console.log(val);
})
*/

let arr = ["delhi", "mumbai", "uttarakhand", "Haryana", "rajasthan"];

arr.forEach((val, idx, arr)=>{  // val means value at each index
    console.log("Cities :",val.toUpperCase(), idx, arr);
}
) 


/*Some more array methods...
1. map method
Creates a new array with the results of some operation. The value its callback returns are used to form new array.
arr.map(callBackFnx(value, index, array))

let newArr = arr.map((val) =>{
    return val *2; 
})*/

let number = [75, 85, 37, 36, 69, 35];

number.map((num)=>{
    console.log("Number :",num);
})


let food = ["Butter", "Paneer", "Dahi", "Rice"];
let newArray = food.map((food)=>{
    return food;
})
console.log("Foods :",food);

/*2. filter method
Creates a new array of elements that give true for a condition/filter.
eg: All Even numbers.
let newArr = arr.filter((val)=>{
    return val % 2 == 0;
}
) */

let arr1 = [2, 24, 51, 54, 33, 21, 94];
let evenArr = arr1.filter((val) => {
   return val % 2 == 0;
})
console.log("Even numbers are :",evenArr)

/*3. reduce method
Performs some operations and reduce array to a SINGLE VALUE. It returns that SINGLE VALUE.
*/
let arr2 = [1,2,3,4];
let addArr = arr2.reduce((previous, current) => {
    return previous + current;
})
console.log("previous + current :",addArr);

//find out the largest number in this array [42, 434, 545, 65, 342, 435].
let Num = [42, 434, 545, 65, 342, 435];
let largestNum = Num.reduce((prev, curr) => {
    return prev > curr ? prev : curr; 
})
console.log("largest number is :",largestNum);