import CharacterCard from './CharacterCard';

const CharacterList = ({ filterCharacter }) => {
  const listCharacter = filterCharacter.map((eachCharacter) => {
    return (
      <CharacterCard
        eachCharacter={eachCharacter}
        key={eachCharacter.id}
      ></CharacterCard>
    );
  });
  return (
    <section>
      <ul className="contact_list">{listCharacter}</ul>
    </section>
  );
};

export default CharacterList;
