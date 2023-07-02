const fetchInitialPreviewPokemonData = async () => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=493'
  );
  const data = await response.json();
  return data.results;
};

const fetchPokemonTypeData = async (type) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/type/${type}/`
  );
  const data = await response.json();
  return data.pokemon;
};

const fetchPokemonSpecificData = async (pokemon) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
  );
  const { types, name, stats, id } = await response.json();
  return { types, name, stats, id };
};
