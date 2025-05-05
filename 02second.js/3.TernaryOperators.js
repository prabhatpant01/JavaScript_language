// Ternary Operators: Syntax--> condition?True output:False output
// It is commonly referred to as the conditinal operator.
// it takes 3 operands: a condition followed by a question mark(?), then an expression to execute if the condition is true followed by a colon (:), and finally the exression is execute if the condition is false. 

let age1 = 24;

result = age1 >= 18 ? "Adult person" : "Not a Adult person";
console.log(result);


// switch statement : The switch statement is used to perform different actions based on different conditions.
/* syntax : switch(expression){
            case x:
                //code block
            break;
            case y:
                //code block
            break;
            default:
                //code block
}*/

let x = 1;

switch(x){
    case 0:
        console.log("x is zero.");
        break;
    case 1:
        console.log("x is one.");
        break;
    case 2:
        console.log("x is Two.");    
    // default:
    //     console.log("x is greater than 2.");
               
}
    
