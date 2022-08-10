function Order(){

    let status = 'open';
    let order = document.getElementById('food').value;

    let foodPromise = new Promise(function(resolve, reject){

        let time = Math.round((Math.random() * 5));

        setTimeout(function () {

            if(status == "open"){
                resolve(`${order} le bhai le`);
            }
            else{
                reject("Told you, it was close!")
            }

        }, time * 1000)

        
    });

    foodPromise.then(function(res){
        console.log("res : ",res)
    });

    foodPromise.catch(function(err){
        console.log("err : ", err)
    })
}


// resolve = then
// reject = catch