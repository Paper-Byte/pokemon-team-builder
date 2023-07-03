const MAX_TEAM_SIZE = 6;

const pokemonIDHelper = (url) => {
  const pokemonID = url.split('/');
  return pokemonID[6];
};

const titleCase = (str) => {
  const strSplit = str.toLowerCase().split(' ');
  const strCapitalized = strSplit.map(
    (e) => e.charAt(0).toUpperCase() + e.slice(1)
  );
  const strTitle = strCapitalized.join(' ');
  return strTitle;
};

const createPokemonSearchCards = (element) => {
  const searchContainer = document.querySelector('#search-box');
  const newPokemonImage = document.createElement('img');
  const newPokemonMainDiv = document.createElement('div');
  const newPokemonTextDiv = document.createElement('div');
  const newPokemonNameSpan = document.createElement('span');
  const newPokemonIDSpan = document.createElement('span');
  const { url, name } = element;
  newPokemonMainDiv.className = 'pokemon-search';
  newPokemonTextDiv.className = 'list-text';
  newPokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${pokemonIDHelper(
    url
  )}.png`;

  newPokemonNameSpan.textContent = titleCase(name);
  newPokemonNameSpan.style.width = '100%';

  newPokemonIDSpan.textContent = `#${pokemonIDHelper(url)}`;

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
  if (teamArray.length < MAX_TEAM_SIZE) {
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
  currentPreviewCardName.textContent = titleCase(pokemonObj.name);
  if (pokemonObj.types.length === 2) {
    currentPreviewCardTypeOne.src = `/src/img/icons/${pokemonObj.types[0].type.name}.svg`;
    currentPreviewCardTypeOne.alt = `${pokemonObj.types[0].type.name} icon`;
    currentPreviewCardTypeOne.className = `${pokemonObj.types[0].type.name} card-icon`;
    currentPreviewCardTypeTwo.src = `/src/img/icons/${pokemonObj.types[1].type.name}.svg`;
    currentPreviewCardTypeTwo.alt = `${pokemonObj.types[1].type.name} icon`;
    currentPreviewCardTypeTwo.className = `${pokemonObj.types[1].type.name} card-icon`;
  } else {
    currentPreviewCardTypeOne.src = `/src/img/icons/${pokemonObj.types[0].type.name}.svg`;
    currentPreviewCardTypeOne.alt = `${pokemonObj.types[0].type.name} icon`;
    currentPreviewCardTypeOne.className = `${pokemonObj.types[0].type.name} card-icon`;
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

const createSavedTeam = async (teamObj) => {
  const savedTeamDiv = document.querySelector('#saved-pokemon-teams');
  const newPokemonDiv = document.createElement('div');
  newPokemonDiv.className = 'saved-team-card';
  const teamNameP = document.createElement('p');
  teamNameP.className = 'team-name';
  teamNameP.textContent = teamObj.name;
  newPokemonDiv.append(teamNameP);
  const teamArray = teamObj.team;
  teamArray.forEach((e) => {
    const newPokemonImg = document.createElement('img');
    newPokemonImg.alt = `${teamObj.name}-${e.name}`;
    newPokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${e.id}.png`;
    newPokemonImg.className = 'saved-team-pokemon';
    newPokemonDiv.appendChild(newPokemonImg);
  });
  savedTeamDiv.appendChild(newPokemonDiv);
  console.log(teamObj);
};

const clearFormState = () => {
  //   const previewCardImg = document.querySelectorAll('.card-img');
  //   previewCardImg.src = './src/img/placeholderimage.png';
  //   previewCardImg.alt = 'placeholder';
  //   const previewCardName = document.querySelectorAll('.card-p');
  //   previewCardName.textContent = '';
  //   const previewCardTypes = document.querySelectorAll('.card-icon');
  //   previewCardTypes.src = './src/img/placeholderimage.png';
  //   previewCardTypes.className = 'card-icon';
  //   previewCardTypes.alt = 'placeholder';
  //   previewCardTypes.style.visibility = 'visible';
  //   const previewCardHP = document.querySelectorAll('.HP-stat');
  //   previewCardHP.textContent = 'HP: ';
  //   const previewCardAtk = document.querySelectorAll('.Atk-stat');
  //   previewCardAtk.textContent = 'Atk: ';
  //   const previewCardDef = document.querySelectorAll('.Def-stat');
  //   previewCardDef.textContent = '';
  //   const previewCardSpAtk = document.querySelectorAll('.SAtk-stat');
  //   previewCardSpAtk.textContent = '';
  //   const previewCardSpDef = document.querySelectorAll('.SDef-stat');
  //   previewCardSpDef.textContent = '';
  //   const previewCardSpd = document.querySelectorAll('.Spd-stat');
  //   previewCardSpd.textContent = '';
  const pokemonCardList = document.querySelector('#search-box');
  pokemonCardList.innerHTML = `<input type="text" id="search-input-text" placeholder="Search..."/>`;
  for (let counter = 0; counter < MAX_TEAM_SIZE; counter++) {
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

    currentPreviewCardImg.src = './src/img/placeholderimage.png';
    currentPreviewCardImg.alt = 'placeholder';
    currentPreviewCardName.textContent = '';
    currentPreviewCardTypeOne.src = './src/img/placeholderimage.png';
    currentPreviewCardTypeOne.alt = 'placeholder';
    currentPreviewCardTypeOne.className = 'card-icon';
    currentPreviewCardTypeTwo.src = './src/img/placeholderimage.png';
    currentPreviewCardTypeTwo.alt = 'placeholder';
    currentPreviewCardTypeTwo.className = 'card-icon';
    currentPreviewCardTypeTwo.style.visibility = 'visible';
    currentPreviewCardHP.textContent = 'HP: ';
    currentPreviewCardAtk.textContent = 'Atk: ';
    currentPreviewCardDef.textContent = 'Def: ';
    currentPreviewCardSpAtk.textContent = 'Sp. Atk: ';
    currentPreviewCardSpDef.textContent = 'Sp. Def: ';
    currentPreviewCardSpd.textContent = 'Spd: ';
  }
};

const handleTrainerName = () => {
  const trainerHeader = document.querySelector(
    '#trainer-name-header'
  );
  const trainerNameText = document.querySelector(
    '#submit-trainer-textbox'
  );
  let trainerName = trainerNameText.value;
  trainerName =
    trainerName.charAt(0).toUpperCase() + trainerName.slice(1);
  trainerHeader.textContent = `${trainerName}'s Saved Teams`;
  trainerNameText.value = '';
};
