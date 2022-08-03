document.querySelector("#btn-1").addEventListener("click", objectText);
document.querySelector("#btn-2").addEventListener("click", arrayText);
document.querySelector("#btn-3").addEventListener("click", functionText);
document.querySelector("#btn-4").addEventListener("click", stringText);
document.querySelector("#btn-5").addEventListener("click", numberText);



function objectText(){
    document.querySelector("#object").textContent = "OBJECTS";
    console.log("here..");
}

function arrayText(){
    document.querySelector("#array").textContent = "ARRAR";
}

function functionText(){
    document.querySelector("#function").textContent = "FUNCTION";
}

function stringText(){
    document.querySelector("#string").textContent = "STRING";
}

function numberText(){
    document.querySelector("#number").textContent = "NUMBER";
}