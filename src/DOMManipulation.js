const typeFilterDiv = document.querySelector('#search-filter');
let cardCounter = 0;
const searchSelection = document.querySelector('#search-box');
const saveTeamButton = document.querySelector('#save-team-button');
const userSearch = document.querySelector('#search-input-text');
let TYPE_SEARCH = '';
let newTeamObj = {
  name: '',
  team: [],
};

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
  TYPE_SEARCH = activeTypeValue.textContent.toLowerCase();
  renderTypeSearchPokemonCard(
    activeTypeValue.textContent.toLowerCase()
  );
  userSearch.removeEventListener();
  userSearch.addEventListener('keydown', async () => {
    let userSearchInput = saveTeamButton.value;
    const filteredObj = await userSearchFilter(
      userSearchInput,
      TYPE_SEARCH
    );
    filteredObj.forEach((element) =>
      createPokemonSearchCards(element)
    );
  });
});

searchSelection.addEventListener('click', (e) => {
  const chosenPokemon = e.target.closest('.pokemon-search');
  const chosenPokemonName = chosenPokemon.textContent
    .split('#')[0]
    .toLowerCase();
  editPokemonPreviewCards(
    newTeamObj.team,
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
  newTeamObj.name = titleCase(saveTeamInput.value);
  createSavedTeam(newTeamObj);
  //   postTeamData(currentTeamArray);
  clearFormState();
  renderInitialSearchPokemonCard();
  cardCounter = 0;
  saveTeamButton.disabled = 'true';
  saveTeamInput.value = '';
  newTeamObj.team = [];
});

saveTrainerSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
  handleTrainerName();
});
