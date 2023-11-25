// TODO write your code here

const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
const cardTemplate = document.querySelector('#cardTemplate');
const cardsContainer = document.querySelector('#cardsContainer');

fetch(url)
  .then(response => response.json())
  .then((data) => {
    data.results.forEach((result) => {
      fetch(result.url)
        .then(response => response.json())
        .then((pokemon) => {
          const cardClone = cardTemplate.content.cloneNode(true);
          cardClone.querySelector('img').src = pokemon.sprites.front_default

          cardsContainer.appendChild(cardClone);
        })
    })
  })
