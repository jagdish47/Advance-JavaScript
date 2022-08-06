 
document.querySelector("#start").addEventListener("click", startFun);
document.querySelector("#end").addEventListener("click", endFun);
document.querySelector("#clear").addEventListener("click", clearFun);


var timer;
var count = 0;

function startFun(){
    

        timer = setInterval(function(){
        document.querySelector("#count").textContent = count;
        count++;
    },1000)

}



function endFun(){
    
    clearInterval(timer);
}


function clearFun(){
    count = 0;
    document.querySelector("#count").textContent = count;
    clearInterval(timer);
}


//  function counter(){

//     setInterval(function(){

//         console.log("i am running")

//     },1000)

//  }


//  counter();