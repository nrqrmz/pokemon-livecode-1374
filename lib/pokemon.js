// TODO write your code here

const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
const cardTemplate = document.querySelector('#cardTemplate');
const cardsContainer = document.querySelector('#cardsContainer');
const infoTemplate = document.querySelector('#infoTemplate');
const infoContainer = document.querySelector('#infoContainer');

fetch(url)
  .then(response => response.json())
  .then((data) => {
    data.results.forEach((result) => {
      fetch(result.url)
        .then(response => response.json())
        .then((pokemon) => {
          const cardClone = cardTemplate.content.cloneNode(true);
          cardClone.querySelector('img').src = pokemon.sprites.front_default
          cardClone.querySelector('h2').textContent = pokemon.name
          cardClone.querySelector('p').textContent = pokemon.types.map(type => type.type.name).join(', ')

          cardClone.querySelector('a').addEventListener('click', (event) => {
            event.preventDefault();
            infoContainer.innerHTML = '';

            const infoClone = infoTemplate.content.cloneNode(true);
            infoClone.querySelector('img').src = pokemon.sprites.front_default
            infoClone.querySelector('h2').textContent = pokemon.name
            infoClone.querySelector('p').textContent = pokemon.types.map(type => type.type.name).join(', ')

            infoContainer.appendChild(infoClone);
          })

          cardsContainer.appendChild(cardClone);
        })
    })
  })
