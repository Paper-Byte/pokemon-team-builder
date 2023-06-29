const initialPokemonSearch = async () => {
  const initialPokemonResponse = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'
  );
  const initialPokemonObj = await initialPokemonResponse.json();
  console.log(initialPokemonObj);
};
