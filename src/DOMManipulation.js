const typeFilterDiv = document.querySelector('#search-filter');
let cardCounter = 0;
const searchSelection = document.querySelector('#search-box');
const saveTeamButton = document.querySelector('#save-team-button');
const currentTeamArray = [];
const saveTrainerSubmit = document.querySelector(
  '#trainer-form form'
);

const renderInitialSearchPokemonCard = async () => {
  const pokemonData = await fetchInitialPreviewPokemonData();
  pokemonData.forEach((element) => createPokemonSearchCards(element));
};

const renderTypeSearchPokemonCard = async (type) => {
  const pokemonCardList = document.querySelector('#search-box');
  const pokemonData = await fetchPokemonTypeData(type);
  const filteredPokemonData = pokemonData.filter((element) => {
    const elementPokemon = element.pokemon;
    if (pokemonIDHelper(elementPokemon.url) <= 649) {
      return element;
    }
  });
  pokemonCardList.innerHTML = `<input type="text" id="search-input-text" placeholder="Search..."/>`;
  filteredPokemonData.forEach((element) =>
    createPokemonSearchCards(element.pokemon)
  );
};

document.addEventListener(
  'DOMContentLoaded',
  renderInitialSearchPokemonCard()
);

typeFilterDiv.addEventListener('click', (e) => {
  const activeType = e.target.closest('.icon');
  const activeTypeValue = activeType.querySelector('p');
  renderTypeSearchPokemonCard(
    activeTypeValue.textContent.toLowerCase()
  );
});

searchSelection.addEventListener('click', (e) => {
  const chosenPokemon = e.target.closest('.pokemon-search');
  const chosenPokemonName = chosenPokemon.textContent
    .split('#')[0]
    .toLowerCase();
  editPokemonPreviewCards(
    currentTeamArray,
    cardCounter,
    chosenPokemonName
  );
  cardCounter++;
  if (cardCounter === 6) {
    saveTeamButton.removeAttribute('disabled');
    return;
  }
});

saveTeamButton.addEventListener('click', () => {
  const saveTeamInput = document.querySelector(
    '#submit-team-textbox'
  );
  createSavedTeam(saveTeamInput.value, currentTeamArray);
  clearFormState();
  renderInitialSearchPokemonCard();
});

saveTrainerSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
  handleTrainerName();
  //   const trainerHeader = document.querySelector(
  //     '#trainer-name-header'
  //   );
  //   const trainerNameText = document.querySelector(
  //     '#submit-trainer-textbox'
  //   );
  //   let trainerName = trainerNameText.value;
  //   trainerName =
  //     trainerName.charAt(0).toUpperCase() + trainerName.slice(1);
  //   trainerHeader.textContent = `${trainerName}'s Saved Teams`;
  //   trainerNameText.value = '';
});
