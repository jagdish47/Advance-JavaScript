async function getMovies() {
  let res = await fetch("http://www.omdbapi.com/?apikey=65cd0562&s=avengers");

  let data = await res.json();

  console.log(data);
}

getMovies();
