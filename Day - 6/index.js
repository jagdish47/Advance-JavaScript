// API - Application Programming Interface.
// API - something which is connect two server
// Your brwoser is also a server
// Interface - Something which connects two things

// 1 API - Road
// 2 fetch - Roadtrip (go and comeback)
// 3 url - location

// Collecting data also an promise either it completely came or left

let url = "https://fakestoreapi.com/products";

let container = document.getElementById('container');

// let myRequest = fetch(url);
// console.log("x ", x);

// fetch(url).then(function(res){

//     return res.json();
//     // here you collect all data
// })

// .then(function(res){
//     console.log("res : ", res);

// })

// .catch(function(err){
//     console.log("err : ", err)
// })

async function getData() {
  try {
    let res = await fetch(url);

    let data = await res.json();

    // console.log("data : ", data);
    appendProducts(data);

  } catch (err) {
    console.log("err : ", err);
  }
}


getData();



function appendProducts(data){

    data.forEach(function(el){
        console.log("el : ", el);
        
        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = el.image;

        let title = document.createElement('p');
        title.innerText = el.title;

        let price = document.createElement('p');
        price.innerText = el.price;


        div.append(img, title, price);

        container.append(div);
    })

}