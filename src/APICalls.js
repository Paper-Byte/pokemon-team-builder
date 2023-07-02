const fetchInitialPreviewPokemonData = async () => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=386'
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
