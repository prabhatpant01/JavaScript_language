//Operators in JS: It is used to perform some operation on data.

/*1. Arithmetic Operators: add(+),sub(-),mul(*),div(/), Modulus(%), Exponentiation(**),
[UNIARY OPERATORS]-a.INCREMENT: 1.Post-Increment(a++) 2.Pre-Increment(++a)
b.DECREMENT: 1.Post Decrement(a--) 2.Pre-Decrement(--a) */

//Arithmetic Operators//
let a = 2;
let b = 5;

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b); //2 % 5 = 1
console.log("a ** b = ", a ** b); //2^5 = 32

//Uniary Operators//
c = 3;

console.log('Post increment: c++', c++); 
console.log('now c = ', c); 

console.log('Pre increment: ++c', ++c);
console.log('now c = ', c); 

console.log('Post decrement: c--', c--);
console.log('now c = ', c); 

console.log('Pre decrement: --c', --c);
console.log('now c = ', c); 

/*2. Assignment Operators: =, +=, -=, /=, **=, %= */
let d = 3;

d += 2;// d = d + 2
console.log("d =", d)

/*3. Comparison Operators: it compare one value to another value.
1.Equal to(==), 2.Equal to & type(===), 3.Not Equal to(!=), 4.Not Equal to & type(!==)
..... []>], [<], [>=], [<=]..... */
let e = 5;// number data type 
let f = 5;

console.log('5 == 5 :', e == f) // true

let f1 = "5";// string data type
console.log("5 === '5' :", e === f1) // false

console.log('5 != 5 :', e != f); // false
console.log("5 !== '5' :", e !== f1) // true

//Bitwise Operators//
console.log("5 & 1 :", 5 & 1) // 1
console.log("5 | 1 :", 5 | 1) // 5
console.log("5 << 1 :", 5 << 1) // 10
console.log("5 >> 1 :", 5 >> 1) // 2
console.log("5 ^ 1 :", 5 ^ 1) // 4


/*4. Logical Operators: it evaluates multiple expressions to give final result.
1. Logical AND(&&), 2. Logical OR(||) 3. Logical NOT(!), 4. Logical XOR(^)*/ 
let g = 7;
let h = 4;

console.log("7 == 4 && 7 > 4 :", 7==4 && 7>4);
console.log("7 >= 4 || 7 <= 4 :", 7>=4 || 7<=4);
console.log(" ! (7 > 4) :", ! (7>4));
console.log(true ^ false )
