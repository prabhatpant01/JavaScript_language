function myname(){
    let name = "Prabhat"
    console.log("hello my name is :", name)
}
myname()

// console.log(name) // name is not present here because name variable is into the block-scope we cant access it here 


// Closure --> A closure is a feature in JavaScript where a function retains access to variables from its outer scope, 
// even after the outer function has finished executing.
// Think of it as memory storage for a function—it "remembers" the variables around it.

//ex-1
function createCounter() { // outer function
    let count = 0; // Private variable

    return function() { // inner function
        count++;
        console.log(`Current Count: ${count}`);
    };
}

const counter = createCounter();
counter(); // Output: Current Count: 1
counter(); // Output: Current Count: 2
counter(); // Output: Current Count: 3

//ex-2
function bankAccount(initialBalance) { // outer function
    let balance = initialBalance; // Private variable

    return {     // inner functions 
        deposit: function(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}. New Balance: ${balance}`);
        },
        withdraw: function(amount) {
            if (amount > balance) {
                console.log(`Insufficient funds! Current Balance: ${balance}`);
            } else {
                balance -= amount;
                console.log(`Withdrawn: ${amount}. New Balance: ${balance}`);
            }
        },
        checkBalance: function() {
            console.log(`Current Balance: ${balance}\n`);
        }
    };
}

const myAccount = bankAccount(1000); // Initial balance is 1000
myAccount.deposit(500); // Deposited: 500. New Balance: 1500
myAccount.withdraw(200); // Withdrawn: 200. New Balance: 1300
myAccount.checkBalance(); // Current Balance: 1300

