let key = "0387ceaecbaa725a19a24940cf15de28";

let container = document.getElementById('container');

let iframe = document.getElementById("gmap_canvas");

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function getWeatherData() {
  try {
    let city = document.getElementById("city").value;

    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);

    let data = await res.json();

    showWeather(data);

    // console.log(data);
  } catch (err) {
    console.log("err : ", err);
  }
}

getWeatherData();


function showWeather(d){

    // console.log(d);

    // everytime we serach clean previous data
    container.innerHTML = null;

    let name = document.createElement('p');
    name.innerText = `Name - ${d.name}`;

    let temp = document.createElement('p');
    temp.innerText =`Temp - ${d.main.temp}°`;

    let humidity = document.createElement('p');
    humidity.innerText = `Humidity - ${d.main.humidity}`;

    let pressure = document.createElement('p');
    pressure.innerText = `Presure - ${d.main.pressure}`;


    iframe.src = `https://maps.google.com/maps?q=${d.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    container.append(name, temp, pressure, humidity);
}