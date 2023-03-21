import { Link } from 'react-router-dom';

const CharacterCard = ({ eachCharacter }) => {
  return (
    <dl>
      <Link to={`/character/${eachCharacter.id}`}>
        <img
          src={
            eachCharacter.image !== ''
              ? eachCharacter.image
              : `https://via.placeholder.com/210x295/E5C07B/666666/?text=${eachCharacter.name}`
          }
          alt={`character: ${eachCharacter.name}`}
        />
        <dt>{eachCharacter.name}</dt>
        <dd>{eachCharacter.specie}</dd>
      </Link>
    </dl>
  );
};

export default CharacterCard;
