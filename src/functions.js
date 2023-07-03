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
  const currentPreviewCardImg = document.querySelector(
    `#card-img-${counter + 1}`
  );
  const currentPreviewCardName = document.querySelector(
    `#card-name-${counter + 1}`
  );
  const currentPreviewCardTypeOne = document.querySelector(
    `#type-one-${counter + 1}`
  );
  const currentPreviewCardTypeTwo = document.querySelector(
    `#type-two-${counter + 1}`
  );
  const currentPreviewCardHP = document.querySelector(
    `#HP-${counter + 1}`
  );
  const currentPreviewCardAtk = document.querySelector(
    `#Atk-${counter + 1}`
  );
  const currentPreviewCardSpd = document.querySelector(
    `#Spd-${counter + 1}`
  );
  const currentPreviewCardSpAtk = document.querySelector(
    `#SAtk-${counter + 1}`
  );
  const currentPreviewCardDef = document.querySelector(
    `#Def-${counter + 1}`
  );
  const currentPreviewCardSpDef = document.querySelector(
    `#SDef-${counter + 1}`
  );
  if (counter === 6) {
    saveTeamButton.removeAttribute('disabled');
    return;
  } else {
  }
};
