/*Strings: A string is a sequence of one or more characters that may consist of letters, numbers, or symbols.
Strings in JavaScript are primtive data types and immutable, which means they are unchanging. */
let str = "hello coders";
console.log(str);// create string
console.log(typeof str);// string type
console.log(str.length);// string length
console.log(str[0]); // string indices

/*Template literal : A way to have embedded expressions in Strings.----> `this is a template literal` */
/*String Interpolation : To create string by doing substitution.---->`string text ${expression} string text`*/
let obj ={
    item: "pen",
    price: 100,
    color: "blue"
};
console.log("The cost of",obj.item, "is", obj.price, "and color is", obj.color);

//Template literals
let specialString = `this is my string`;
console.log(specialString);
console.log(`The cost of ${obj.item} is ${obj.price} and color is ${obj.color}`) // Better way using template literal.

/*String methods in JS: These are built in function to manipulate a string.
str.toUpperCase()
str.toLowerCase()
str.trim()
str.slice(start,end?)
str1.concat(str2)
str.replace(searchVal,newVal)
str.charAt(idx)
*/

str = "    aman Singh Gupta"
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim()); //It removes whitespaces of starting and ending

num = "9756664985"
myName = "Prabhatpant"
console.log(num.slice(0,4));
console.log(num.concat(myName));

console.log(myName.replace("b",'s'));
console.log(myName.replaceAll("pant",'sonu'));

console.log(myName.charAt(5));

