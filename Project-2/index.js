


function storeImages(){

    let img = document.getElementById("url").value;

    // array of object
    let images = JSON.parse(localStorage.getItem("images"));
    // console.log("images", images)


    if(images === null){
        images = [];
    }

    // there is already data in localStorage
    else{

        images = JSON.parse(localStorage.getItem("images"));

    }

    images.push(img);

    localStorage.setItem("images", JSON.stringify(images));
}