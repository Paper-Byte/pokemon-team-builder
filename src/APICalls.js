const fetchInitialPreviewPokemonData = async () => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=649'
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

const testingStuff = async () => {
  const testing = await fetchPokemonSpecificData('dragonite');
  console.log(testing.stats);
};

const postTeamData = async (teamArray) => {
  const response = await fetch('http://localhost:3000/pokemonteams', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(teamArray),
  });
};

const getTeamData = async () => {
  const response = await fetch('http://localhost:3000/pokemonteams');
  const data = response.json();
  return data;
};
