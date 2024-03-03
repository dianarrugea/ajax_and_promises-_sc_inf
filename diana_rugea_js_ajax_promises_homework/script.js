// Displaying the list of characters

let character = {};

const getAllCharacters = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/character`);
  try {
    const data = await res.json();
    console.log(data);
    for(i = 0; i < 20; i++) {

    character.characterName = data.results[i].name;
    character.characterSpecies = data.results[i].species;
    character.characterImage = data.results[i].image;
    console.log(character);
    displayCharacters();
  }
  } catch(error) {
    console.log("Problem reaching All Characters API", error);
  }
};

getAllCharacters();

function displayCharacters() {
  console.log(character);
  let name = character.characterName;
  let species = character.characterSpecies;
  let imageURL = character.characterImage;

  const listItem = document.createElement("li");
  const paragraphSection = document.createElement("div");
  const nameParagraph = document.createElement("p");
  const speciesParagraph = document.createElement("p");
  const imageCharacter = document.createElement("img");

  paragraphSection.classList.add("paragraph-section");
  nameParagraph.classList.add("title");

  nameParagraph.textContent = "Name: " + name;
  speciesParagraph.textContent = "Species: " + species;
  imageCharacter.src = imageURL;

  document.getElementById("character").appendChild(listItem);
  paragraphSection.appendChild(nameParagraph);
  paragraphSection.appendChild(speciesParagraph);
  listItem.appendChild(paragraphSection);
  listItem.appendChild(imageCharacter);
};

// Displaying the list of locations


let allLocation = {};

const getAllLocations = async () => {
  const res = await fetch (`https://rickandmortyapi.com/api/location`);
  try {
    const data = await res.json();
    console.log(data);
    for(i=0; i < 20; i++) {

      allLocation.locationName = data.results[i].name;
      allLocation.locationType = data.results[i].type;
      console.log(allLocation);
      displayLocations();
    }
  } catch(error) {
    console.log('Problem reaching All Locations API', error)
  }
};

getAllLocations();

  function displayLocations() {
    console.log(allLocation);
    let name = allLocation.locationName;
    let type = allLocation.locationType;

    const listItem = document.createElement("li");
    const paragraphSection = document.createElement("div");
    const nameParagraph = document.createElement("p");
    const typeParagraph = document.createElement("p");

    paragraphSection.classList.add("paragraph-section");
    nameParagraph.classList.add("title");

    nameParagraph.textContent = "Name: " + name;
    typeParagraph.textContent = "Location Type: " + type;

    document.getElementById("location").appendChild(listItem);
    listItem.appendChild(paragraphSection);

    paragraphSection.appendChild(nameParagraph);
    paragraphSection.appendChild(typeParagraph);

  }

  // Displaying the list of episodes

let allEpisodes = {};

const getAllEpisodes = async () => {
  const res = await fetch ('https://rickandmortyapi.com/api/episode');
  try {
    const data = await res.json();
    console.log(data);
    for (i=0; i < 20; i++) {

      allEpisodes.episodeName = data.results[i].name;
      allEpisodes.episodeAirDate = data.results[i].air_date;
      console.log(allEpisodes);
      displayEpisodes();
    }
  } catch(error) {
    console.log('Problem reaching All Episodes API', error)
  }
};

getAllEpisodes();

  function displayEpisodes() {
    console.log(allEpisodes);
    let name = allEpisodes.episodeName;
    let airDate = allEpisodes.episodeAirDate;
  
    const listItem = document.createElement("li");
    const paragraphSection = document.createElement("div");
    const nameParagraph = document.createElement("p");
    const airDateParagraph = document.createElement("p");

    paragraphSection.classList.add("paragraph-section");
    nameParagraph.classList.add("title");

    nameParagraph.textContent = "Name: " + name;
    airDateParagraph.textContent = "Air Date: " + airDate;

    document.getElementById("episode").appendChild(listItem);

    listItem.appendChild(paragraphSection);
    
    paragraphSection.appendChild(nameParagraph);
    paragraphSection.appendChild(airDateParagraph);
  }