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
  const pokemonData = await fetchPokemonTypeData(type);
  const filteredPokemonData = pokemonData.filter((e) =>
    pokemonRangeCheck(e.pokemon)
  );
  console.log(filteredPokemonData);
};

document.addEventListener(
  'DOMContentLoaded',
  renderInitialSearchPokemonCard()
);
