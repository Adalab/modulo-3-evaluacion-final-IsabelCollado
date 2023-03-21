const CallToApi = (selectHouse) => {
  return fetch(
    `https://hp-api.onrender.com/api/characters/house/${selectHouse}`
  )
    .then((response) => response.json())
    .then((response) => {
      const cleanData = response.map((eachCharacter) => {
        return {
          id: eachCharacter.id,
          name: eachCharacter.name,
          specie: eachCharacter.species,
          gender: eachCharacter.gender,
          house: eachCharacter.house,
          alive: eachCharacter.alive,
          image: eachCharacter.image,
        };
      });
      return cleanData;
    });
};

export default CallToApi;
