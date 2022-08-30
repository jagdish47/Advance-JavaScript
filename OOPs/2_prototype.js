function BankAccount(customerName, balance = 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;


    // this.deposit = function(amount){
    //     this.balance = this.balance + amount;
    // }


    // this.withdraw = (amount) => {
    //     this.balance -= amount;
    // }
}

// when we create method in constructor function than each time Object is created these method will created too and took space again and again
// so we use prototype to define these method and they will not take again and again 
const JagdishAccount = new BankAccount("Jagdish Kumawat", 1000);
const AnshuAccount = new BankAccount("Ansh Kumawat");



BankAccount.prototype.deposite = function (amount){
    this.balance += amount;
}

BankAccount.prototype.withdraw = function (amount){
    this.balance -= amount;
}

JagdishAccount.deposite(11000);

console.log(JagdishAccount);



// All JavaScript objects inherit properties and methods from a prototype.
// The JavaScript prototype property allows you to add new properties to object constructors:
// The JavaScript prototype property also allows you to add new methods to objects constructors:



// All JavaScript objects inherit properties and methods from a prototype:

//     Date objects inherit from Date.prototype
//     Array objects inherit from Array.prototype
//     Person objects inherit from Person.prototype

// The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype.