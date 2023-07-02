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

const renderInitialSearchPokemonCard = async () => {
  const pokemonData = await fetchInitialPreviewPokemonData();
  pokemonData.forEach((element) => createPokemonSearchCards(element));
};

const renderTypeSearchPokemonCard = async (type) => {
  const pokemonCardList = document.querySelector('#search-box');
  const pokemonData = await fetchPokemonTypeData(type);
  const filteredPokemonData = pokemonData.filter((element) =>
    pokemonRangeCheck(element.pokemon)
  );
  pokemonCardList.innerHTML = `<input type="text" id="search-input-text" placeholder="Search..."/>`;
  filteredPokemonData.forEach((element) =>
    createPokemonSearchCards(element.pokemon)
  );
};

document.addEventListener(
  'DOMContentLoaded',
  renderInitialSearchPokemonCard()
);
