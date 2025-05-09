// HOF- Higher order function in arrays
// forEach() method, map(), filter(), reduce()
//ex-1 forEach 
let fruits = ["Apple", "Mango", "Guava", "Orange", "Banana"]
fruits.forEach((fruits)=> console.log(fruits))

//ex-2 creation of new transformed array usin map() HOF
let arr = [1, 2, 3, 4, 5]
let cube_arr = arr.map((num)=> num**3)
console.log(cube_arr) // [ 1, 8, 27, 64, 125 ] // transformed array of a cube
console.log(arr) // [ 1, 2, 3, 4, 5 ] doesn't change original array

//ex-3 filter
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let even = arr1.filter((num)=> num %2==0)
console.log(even)

//ex-4 reduce
let arr2 = [1,2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = arr2.reduce((current, next)=> current + next)
console.log(sum) // 55





