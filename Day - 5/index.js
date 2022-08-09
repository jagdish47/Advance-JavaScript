//1. Promise
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// Promise is an object

// Promise have two method either it will success or either it will
// goint to fail we have to handle both the situation

// if promise going to success than we do that
// if promise going to fail than we'll do that

// If your successfully commit than then() function will execute
// If your unsuccesslly commit than catch() function will execute

// let myPromise = new Promise(function(resolve, reject){

//     // promise will going to success
//     // if promise will success we will return something
//     resolve("I won")

//     //promise is going to unsuccessful
//     reject("I tried")
// });

// resolve -- then()
// reject -- catch()

// let passexam = false;

// let myPromise = new Promise(function (resolve, reject) {
//   if (passexam ===  true) {
//     resolve("We will bring you a bicylce");
//   } else {
//     reject("we will bring you a riksha");
//   }
// });

// console.log("myPromise : ", myPromise);

// myPromise.then(function (res) {
//     console.log("res : ", res);
// });

// myPromise.catch(function(err){
//     console.log("err coming maybe because spelling mistake", err);
// })

let queue = ["Pablo", "Raju", "syam", "Babu bhaiyaa"];

function Register() {
  let name = document.getElementById("name").value;

  queue.push(name);

  let message = `${name} your registration is successfull, cheers!`;

  alert(message);

  let promise = new Promise(function (resolve, reject) {


    let x = setInterval(function () {
        if (queue[0] === name) {
            resolve(`${name} it's your turn now`);
          }
    },1000);


    
  });

  promise.then(function (res) {
    console.log("res : ", res);
  });
} 

function vaccination_Inprogress(){

    if(queue === 0){
        clearInterval(id);
    }
    queue.shift();
    console.log("queue : ",queue);

}

var id = setInterval(vaccination_Inprogress, 3000);


