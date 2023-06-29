const initialPokemonSearchPreview = async () => {
  const initialPokemonResponse = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=386'
  );
  const initialPokemonObj = await initialPokemonResponse.json();
  return initialPokemonObj;
};
