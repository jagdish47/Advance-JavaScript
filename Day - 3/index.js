const cat = {
    legs : 4, 
    tail : true,
    claws : "sharp",
    mustache : true,

}


const tiger = Object.create(cat);
// here we have created Inheritance we getting all data of cat so we get common properties of cat
tiger.speed = 100;
tiger.weight = "300kg";


hasOwnProperty()
// Method is use to check weather the property its own or we are getting from his parent
console.log(tiger.hasOwnProperty('claws'));

console.log(tiger);