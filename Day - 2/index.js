// console.log(this);



// function myFunction(){
//     console.log(this);
// }
// myFunction();




// const person = {
//     name : "Jagdish Kumawat",
//     test : function(){

//         console.log(this);

//     }
// }


// console.log(person.test());







// function product(){
//     var obj = {
//         name : "Jagdish",
//         age : 24,
//         gender : "Male"
//     }
//     return obj;
// }

// var nike = product();
// console.log(nike);





// function NikeProductCF(){

//     this.name = "Shoes"
//     this.price = 2000
// }

// let p2 = new NikeProductCF()
// console.log(p2);






function Newspaper(h){

    this.date = new Date();
    this.id = Math.round(Math.random() * 10);
    this.name = "Pablo Times";
    this.headline = h;
}


for(var i = 0; i < 10; i++){
    let n = new Newspaper("Virat kohli hits 71st Century");
    console.log(" n : ",  n);
}