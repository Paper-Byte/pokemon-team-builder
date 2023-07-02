const createSearchPokemonCard = async (initial = true) => {
  const searchContainer = document.querySelector('#search-box');
  const newPokemonImage = document.createElement('img');
  const newPokemonMainDiv = document.createElement('div');
  newPokemonMainDiv.className = 'pokemon-search';
  const newPokemonTextDiv = document.createElement('div');
  newPokemonTextDiv.className = 'list-text';
  const newPokemonNameSpan = document.createElement('span');
  newPokemonNameSpan.style.width = '100%';
  const newPokemonIDSpan = document.createElement('span');

  if (initial) {
    const initialPokemonData = await fetchInitialPreviewPokemonData();
  }
};

const createPokemonSearchCards = (element) => {
  const newPokeSearchCard = document.createElement('div');
  newPokeSearchCard.className = 'pokemon-search';
  newPokeSearchCard.innerHTML;
};
