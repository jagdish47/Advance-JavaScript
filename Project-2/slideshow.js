var x;

function start() {
  let images_arr = JSON.parse(localStorage.getItem("images"));
  // console.log(images_arr);
  let slideshow_img = document.getElementById("slideshow_image");

//   console.log(slideshow_img);

  let i = 0;

  x = setInterval(function () {
    
    if (i === 4){
      i = 0;
    }

    slideshow_img.src = images_arr[i];

    i = i + 1;

    // console.log("i : ", i);
  }, 2000);
}


function stop() {
  clearInterval(x);
}
