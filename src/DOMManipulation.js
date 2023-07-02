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

const renderSearchPokemonCard = async (initial, search = '') => {
  if (initial) {
    const initialPokemonData = await fetchInitialPreviewPokemonData();
    initialPokemonData.forEach((element) =>
      createInitPokemonSearchCards(element)
    );
  }
};

document.addEventListener(
  'DOMContentLoaded',
  renderSearchPokemonCard(true)
);
