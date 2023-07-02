const pokemonIDHelper = (url) => {
  const pokemonID = url.split('/');
  return pokemonID[6];
};

const createPokemonSearchCards = (element) => {
  const searchContainer = document.querySelector('#search-box');
  const newPokemonImage = document.createElement('img');
  const newPokemonMainDiv = document.createElement('div');
  const newPokemonTextDiv = document.createElement('div');
  const newPokemonNameSpan = document.createElement('span');
  const newPokemonIDSpan = document.createElement('span');

  newPokemonMainDiv.className = 'pokemon-search';
  newPokemonTextDiv.className = 'list-text';
  newPokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${pokemonIDHelper(
    element.url
  )}.png`;

  newPokemonNameSpan.textContent =
    element.name.charAt(0).toUpperCase() + element.name.slice(1);
  newPokemonNameSpan.style.width = '100%';

  newPokemonIDSpan.textContent = `#${pokemonIDHelper(element.url)}`;

  newPokemonTextDiv.appendChild(newPokemonNameSpan);
  newPokemonTextDiv.appendChild(newPokemonIDSpan);
  newPokemonMainDiv.appendChild(newPokemonImage);
  newPokemonMainDiv.appendChild(newPokemonTextDiv);
  searchContainer.appendChild(newPokemonMainDiv);
};
