function BankAccount(customerName, balance = 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;


    this.deposit = function(amount){
        this.balance = this.balance + amount;
    }


    this.withdraw = (amount) => {
        this.balance -= amount;
    }
}


// const JagdishAccount = new BankAccount("Jagdish Kumawat", 1000);
// const AnshuAccount = new BankAccount("Ansh Kumawat");

// JagdishAccount.deposit(10000);
// JagdishAccount.withdraw(3000);



// console.log(JagdishAccount);
// // console.log(AnshuAccount);


// =====================DOM=====================
const accounts = [];

const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');



const depositeForm = document.querySelector('#depositeForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');




accountForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const account = new BankAccount(customerName.value, +balance.value);

    accounts.push(account);
    console.log(accounts);
    // console.log(customerName.value, balance.value)
});



depositeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const account = accounts.find(
        (account) => account.accountNumber === +accountNumber.value);

        account.deposit(+amount.value);

        console.log(accounts);
})















// We can access properties like that but We have to stop them to doing that
// console.log(JagdishAccount.customerName);
// console.log(JagdishAccount.accountNumber);
// console.log(JagdishAccount.balance = 20000000);


// Variable = Properties
// Fuctions = Methods