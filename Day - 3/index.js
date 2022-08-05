// const cat = {
//     legs : 4,
//     tail : true,
//     claws : "sharp",
//     mustache : true,

// }

// const tiger = Object.create(cat);
// // here we have created Inheritance we getting all data of cat so we get common properties of cat
// tiger.speed = 100;
// tiger.weight = "300kg";

// hasOwnProperty()
// // Method is use to check weather the property its own or we are getting from his parent
// console.log(tiger.hasOwnProperty('claws'));

// console.log(tiger);

// function newspaper(h) {
//   this.date = new Date();
//   this.id = Math.round(Math.random() * 10);
//   this.name = "Rajasthan Patrika";
//   this.headline = h;

  // this.ad = function () {
  //     console.log("Flipkart Big Billion Sale");
  // }
}

// it's an another way to create function it will now effect other
// it keeps neat and clean
// if we delete than do not affect other property

// newspaper.prototype.ad = function () {
//   console.log("Flipkart Big bilion Sale");
// };

// let n1 = new newspaper("Jagdish Kumawat got 3 crore package");

// console.log("n1 : ", n1);

// console.log(n1.ad);







// now array behave like object
// make array object so we can use prototype
// let a1 = new Array(1, 2, 3, 4);
// console.log("a1 : ", a1);


// now string behave like object
// make string object so we can use prototype

// let s1 = new String("Jagdish");
// console.log("s1 : ", s1);








