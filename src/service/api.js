const Api = (eachCharacter) => {
  return {
    name: eachCharacter.name,
    id: eachCharacter.id,
    species: eachCharacter.species,
    alive: eachCharacter.alive,
    gender: eachCharacter.gender,
    image:
      eachCharacter.image !== ''
        ? eachCharacter.image
        : require('../images/userdefault.png.png'),
    house: eachCharacter.house,
  };
};

const getCharactersHouse = (inputHouse) => {
  const url = `https://hp-api.onrender.com/api/characters/house/${inputHouse}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map(Api);
    });
};

const getCharacters = (id) => {
  return fetch(`https://hp-api.onrender.com/api/characters/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.map(Api);
    });
};

const api = {
  getCharactersHouse,
  getCharacters,
};
export default api;
