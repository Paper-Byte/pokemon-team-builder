const typeFilterDiv = document.querySelector('#search-filter');
let cardCounter = 0;
const searchSelection = document.querySelector('#search-box');
const saveTeamButton = document.querySelector('#save-team-button');
const userSearch = document.querySelector('#search-input-text');
const savedTeamsContainer = document.querySelector(
  '#saved-pokemon-teams'
);
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
  pokemonCardList.innerHTML = ``;
  filteredPokemonData.forEach((element) =>
    createPokemonSearchCards(element.pokemon)
  );
};

document.addEventListener('DOMContentLoaded', async () => {
  const savedTeams = await getTeamData();
  console.log(savedTeams.length);
  renderInitialSearchPokemonCard();
  createSavedTeam(savedTeams);
});

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

saveTeamButton.addEventListener('click', async () => {
  let savedTeams = await getTeamData();
  savedTeamsContainer.innerHTML = `<div id="saved-team-header">
  <h1 id="trainer-name-header">Trainer's Saved Teams</h1>
</div>`;
  const saveTeamInput = document.querySelector(
    '#submit-team-textbox'
  );
  newTeamObj.name = titleCase(saveTeamInput.value);
  postTeamData(newTeamObj);
  savedTeams = await getTeamData();
  clearFormState();
  renderInitialSearchPokemonCard();
  cardCounter = 0;
  saveTeamButton.disabled = 'true';
  saveTeamInput.value = '';
  newTeamObj.team = [];
  createSavedTeam(savedTeams);
});

saveTrainerSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
  handleTrainerName();
});
