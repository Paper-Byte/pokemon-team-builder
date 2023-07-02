/*
        <div class="pokemon-search">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/149.png"
          />
          <div class="list-text">
            <span style="width: 100%">Dragonite</span>
            <span>#149</span>
          </div>
        </div>
*/
const typeFilterDiv = document.querySelector('#search-filter');

const renderInitialSearchPokemonCard = async () => {
  const pokemonData = await fetchInitialPreviewPokemonData();
  pokemonData.forEach((element) => createPokemonSearchCards(element));
};

const renderTypeSearchPokemonCard = async (type) => {
  const pokemonCardList = document.querySelector('#search-box');
  const pokemonData = await fetchPokemonTypeData(type);
  const filteredPokemonData = pokemonData.filter((element) => {
    const elementPokemon = element.pokemon;
    if (pokemonIDHelper(elementPokemon.url) <= 386) {
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
