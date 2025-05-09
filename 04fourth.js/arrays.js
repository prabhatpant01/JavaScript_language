/*Arrays: Arrays are used to store multiple values in a single variable.
It can store any data type, including numbers, strings, objects, and even other arrays.
Arrays are mutable so it can be modified by adding, removing, or changing elements.
It is a non-Primitive data type 
It is used wihtin a square brackets.[]*/

let heroes = ["Sonu", "Spiderman","Antman","IronMan", "BlackMan", "WhiteMan"];
console.log(heroes);// Array(6)
console.log("index of heroes 4 :",heroes[4]);// BlackMan 

heroes[4] = "Hulk";// we can modify arrays because arrays are mutable.
console.log("\n");

//looping over in Arrays...
for(let indx=0; indx < heroes.length; indx++){
    console.log(heroes[indx]);
}
console.log("\n");

//for of loop..
for(let hero of heroes){
    console.log(hero);
}

//Array methods in Java Script...
/*
push() : Add to end
pop() : delete from end & return
join() : It combines all the elements of an array into a single string, 
         separated by a specified delimiter. If no delimiter is provided, it defaults to a comma.        
toString() : converts from array to String
concat() : joins multiple arrays & returns result

unshift() : add to Start
shift() : delete from Start and return

slice() : returns a piece of the array ---->slice(starIndx, endIndx). Which can't be modify.
splice() : change original array(add, remove, replace) ---->splice(startIndx, delCount, newEl1). Which can be modify
*/

let veggies = ["Cauliflower","Tomato","pea","capsicum","potato"];
let fruits = ["Apple","Mango","Banana","Cherry","Guava"];
let numbers = [45, 44, 66, 74, 223, 76];

veggies.push("Cabbage");
console.log(" Add to end new item and change original array :",veggies);

veggies.pop();
console.log("Delete from end an item : ", veggies);

numbers.join()
console.log("Converts from array to string using separator by comma but we can customize it and more flexible :", numbers)
console.log("Converts from array to String but doesn't change original array:", numbers);
numbers.toString();

let foods = veggies.concat(fruits);
console.log("joins multiple arrays & returns result :", foods );


foods.unshift("Brinjal");
console.log("Add to start new item :",foods);

foods.shift();
console.log("Delete from start and return :",foods);

let val = foods.slice(1,4);
console.log(val);



//Add Element using splice method.
let arr = [101, 102, 103, 104, 105];
arr.splice(1,2,111,112);
console.log(arr);      //[101, 111, 112, 104, 105]  

//Remove Element using splice method.
let arr1 = [11, 12, 13, 14, 15];
arr1.splice(3,1);
console.log(arr1);     // [11, 12, 13, 15]

//Replace Element using splice method.
let arr2 = [1111, 1112, 1113, 1114, 1115]
arr2.splice(0, 1, 1000);
console.log(arr2);





