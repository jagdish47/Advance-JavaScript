
document.querySelector("button").addEventListener("click", randomNumber);





function randomNumber(){

    var output = document.querySelector("#output");
    let ran = Math.floor(Math.random() * 7);

    // console.log(ran);
    output.textContent = ran;
}