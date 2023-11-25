// TODO write your code here

const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

fetch(url)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  })
