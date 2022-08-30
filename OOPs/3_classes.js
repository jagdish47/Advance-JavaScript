// const BankAccount = class {} works
class BankAccount { 

    // customerName = "Jagdish Kumawat";
    // accountNumber = Date.now();
    // balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposite(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }
    
}

const jagdishAccount = new BankAccount("Jagdish Kumawat", 50000);
jagdishAccount.deposite(1000000);


console.log(jagdishAccount);



// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

// JavaScript Classes are templates for JavaScript Objects.
// When you have a class, you can use the class to create objects:



// The constructor method is called automatically when a new object is created.




// The constructor method is a special method:

//     It has to have the exact name "constructor"
//     It is executed automatically when a new object is created
//     It is used to initialize object properties

// If you do not define a constructor method, JavaScript will add an empty constructor method. 