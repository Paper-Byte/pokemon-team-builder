const pokemonIDHelper = (url) => {
  const pokemonID = url.split('/');
  return pokemonID[6];
};

const createPokemonSearchCards = (element) => {
  const searchContainer = document.querySelector('#search-box');
  const newPokemonImage = document.createElement('img');
  const newPokemonMainDiv = document.createElement('div');
  const newPokemonTextDiv = document.createElement('div');
  const newPokemonNameSpan = document.createElement('span');
  const newPokemonIDSpan = document.createElement('span');

  newPokemonMainDiv.className = 'pokemon-search';
  newPokemonTextDiv.className = 'list-text';
  newPokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${pokemonIDHelper(
    element.url
  )}.png`;

  newPokemonNameSpan.textContent =
    element.name.charAt(0).toUpperCase() + element.name.slice(1);
  newPokemonNameSpan.style.width = '100%';

  newPokemonIDSpan.textContent = `#${pokemonIDHelper(element.url)}`;

  newPokemonTextDiv.appendChild(newPokemonNameSpan);
  newPokemonTextDiv.appendChild(newPokemonIDSpan);
  newPokemonMainDiv.appendChild(newPokemonImage);
  newPokemonMainDiv.appendChild(newPokemonTextDiv);
  searchContainer.appendChild(newPokemonMainDiv);
};

const editPokemonPreviewCards = async (
  teamArray,
  counter,
  pokemon
) => {
  const pokemonObj = await fetchPokemonSpecificData(pokemon);
  if (teamArray.length < 6) {
    teamArray.push(pokemonObj);
  }
  const currentPreviewCardImg = document.querySelector(
    `#card-img-${counter + 1}`
  );
  const currentPreviewCardName = document.querySelector(
    `#card-name-${counter + 1}`
  );
  const currentPreviewCardTypeOne = document.querySelector(
    `#type-one-${counter + 1}`
  );
  const currentPreviewCardTypeTwo = document.querySelector(
    `#type-two-${counter + 1}`
  );
  const currentPreviewCardHP = document.querySelector(
    `#HP-${counter + 1}`
  );
  const currentPreviewCardAtk = document.querySelector(
    `#Atk-${counter + 1}`
  );
  const currentPreviewCardSpd = document.querySelector(
    `#Spd-${counter + 1}`
  );
  const currentPreviewCardSpAtk = document.querySelector(
    `#SAtk-${counter + 1}`
  );
  const currentPreviewCardDef = document.querySelector(
    `#Def-${counter + 1}`
  );
  const currentPreviewCardSpDef = document.querySelector(
    `#SDef-${counter + 1}`
  );

  currentPreviewCardImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonObj.id}.gif`;
  currentPreviewCardImg.alt = pokemonObj.name;
  currentPreviewCardName.textContent =
    pokemonObj.name.charAt(0).toUpperCase() +
    pokemonObj.name.slice(1);
  if (pokemonObj.types.length === 2) {
    currentPreviewCardTypeOne.src = `/src/img/icons/${pokemonObj.types[0].type.name}.svg`;
    currentPreviewCardTypeOne.alt = `${pokemonObj.types[0].type.name} icon`;
    currentPreviewCardTypeOne.className = `${pokemonObj.types[0].type.name} icon`;
    currentPreviewCardTypeTwo.src = `/src/img/icons/${pokemonObj.types[1].type.name}.svg`;
    currentPreviewCardTypeTwo.alt = `${pokemonObj.types[1].type.name} icon`;
    currentPreviewCardTypeTwo.className = `${pokemonObj.types[1].type.name} icon`;
  } else {
    currentPreviewCardTypeOne.src = `/src/img/icons/${pokemonObj.types[0].type.name}.svg`;
    currentPreviewCardTypeOne.alt = `${pokemonObj.types[0].type.name} icon`;
    currentPreviewCardTypeOne.className = `${pokemonObj.types[0].type.name} icon`;
    currentPreviewCardTypeTwo.style.visibility = 'hidden';
    currentPreviewCardTypeTwo.alt = 'No second type';
  }
  currentPreviewCardHP.textContent = `HP: ${pokemonObj.stats[0].base_stat}`;
  currentPreviewCardAtk.textContent = `Atk: ${pokemonObj.stats[1].base_stat}`;
  currentPreviewCardDef.textContent = `Def: ${pokemonObj.stats[2].base_stat}`;
  currentPreviewCardSpAtk.textContent = `Sp. Atk: ${pokemonObj.stats[3].base_stat}`;
  currentPreviewCardSpDef.textContent = `Sp. Def: ${pokemonObj.stats[4].base_stat}`;
  currentPreviewCardSpd.textContent = `Spd: ${pokemonObj.stats[5].base_stat}`;
};

const createSavedTeam = async (teamName, teamArray) => {
  const savedTeamDiv = document.querySelector('#saved-pokemon-teams');
  const newPokemonDiv = document.createElement('div');
  newPokemonDiv.className = 'saved-team-card';
  const teamNameP = document.createElement('p');
  teamNameP.className = 'team-name';
  teamNameP.textContent = teamName;
  newPokemonDiv.append(teamNameP);
  teamArray.forEach((e) => {
    const newPokemonImg = document.createElement('img');
    newPokemonImg.alt = `${teamName}-${e.name}`;
    newPokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${e.id}.png`;
    newPokemonImg.className = 'saved-team-pokemon';
    newPokemonDiv.appendChild(newPokemonImg);
  });
  savedTeamDiv.appendChild(newPokemonDiv);
};

const clearFormState = () => {
  const previeCardImg = document.querySelectorAll();
};
