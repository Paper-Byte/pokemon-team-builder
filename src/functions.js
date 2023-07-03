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

const editPokemonPreviewCards = async (counter, pokemon) => {
  const pokemonObj = fetchPokemonSpecificData(pokemon);
  const saveTeamButton = document.querySelector('#save-team-button');
  const currentPreviewCard = document.querySelector(
    `#preview-card-${counter + 1}`
  );
  const currentPreviewCardPokemonImg = document.querySelector(
    `#preview-card-${counter + 1} , .pokemon-icon , img`
  );
  const currentPreviewCardPokemonName = document.querySelector(
    `#preview-card-${counter + 1} , .pokemon-icon , p`
  );
  const currentPreviewCardType1 = document.querySelector(
    `#preview-card-${counter + 1} , .pokemon-typing-icons , .icon[0]`
  );
  const currentPreviewCardType2 = document.querySelector(
    `#preview-card-${counter + 1} , .pokemon-typing-icons , .icon[1]`
  );
  const currentPreviewCardHp = document.querySelector(
    `#preview-card-${
      counter + 1
    } , .pokemon-card-defense-stats , p[0]`
  );

  if (counter === 6) {
    saveTeamButton.removeAttribute('disabled');
    return;
  } else {
  }
};
