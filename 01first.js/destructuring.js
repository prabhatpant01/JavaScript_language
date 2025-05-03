//In JavaScript, destructuring is a convenient way to extract values from arrays or properties from objects and assign them to variables. 
//It uses a concise syntax to break down complex data structures into smaller, more manageable pieces.

// 1. Destructuring in an array
let arr = [ 20, 34, 45, 65, 33, 23]

let [a, b, c, d, e, f] = [ 20, 34, 45, 65, 33, 23]
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)

// ex=2
let arr2 = [12, "ankit", "anuj", 34, 2, 77]
let [m, n , o, p, q, r] = [12, "ankit", ["anuj", 34], 2, 77]
console.log(m)
console.log(n)
console.log(o)
console.log(p)
console.log(q)
console.log(r)// undefined

// ex=3
const fruits = ['apple', 'banana', 'cherry'];
const [first, second, third] = fruits;
console.log(first); // 'apple'
console.log(second); // 'banana'
console.log(third); // 'cherry'


// 2. Destructuring in an object
const per = {
    name : "Anshika",
    hobby : "playing",
    age : 23,
}

const {name, age, gender} = per
console.log(name) // Anshika
console.log(age) // 23
console.log(gender) // undefined

// ex=1
const person = { name1: 'Prabhat', age1: 25, city: 'Pauri' };
const { name1, age1, city } = person;
console.log(name1); // 'Prabhat'
console.log(age1);  // 25
console.log(city); // 'Pauri'




  














