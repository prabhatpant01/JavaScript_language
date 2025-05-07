// loops : loops are used to execute a piece of code again & again.
/*1. for loop , 
*/

for(let i=1; i<=5; i++){
    console.log(i)
}

// sum of 1 to 5 numbers.
sum = 0;
for(let i=1; i<=5; i++){
    sum = sum + i;
}
console.log("sum of 1 to 5 numbers are :",sum);

/*2. Infinite loop : A loop that never ends.*/
/*warning : please DONT run this code otherwise chrome will be freezed.
let(i=0; i>=0; i++){
    console.log(i);
} */

//3. while loop : while(condition){// block of code }.
let i=1;
while(i<=10){
    console.log("sonu pant");
    i++;
}

//4. do-while loop : do{// block of code}while(conditon);  
// at least run one at a time.
let k = 1;
let sum1 = 0;
do{
   sum1 = sum1 + k;
   k++;
}while(k<=5);
console.log("sum =", sum1);

//5. for-of loop : for(let val of strVar){// do some work}
// It is used for iterating over iterables like strings, arrays and maps. 
let str = "sonupant";
for(let val of str){
    console.log("val = ", val);
}

//calculate length of string using for-of loop.
let string = "prabhatpant"; 
let len = 0;
for(let val of string){
    len++;
}
console.log("length of string is: ", len);

//6. for-in loop : for(let key in objectVar){// do some work}
// The for...in loop iterates over all enumerable properties of an object, including those inherited from its prototyope chain. it is commonly used for iterating over an object's keys.
let student = {
    name: "amitchamoli",
    roll_no: 2304025,
    cgpa: 7.9,
    ispass: true,
};

for(let i in student){
    console.log("keys :", i ,"values :", student[i]);
}
