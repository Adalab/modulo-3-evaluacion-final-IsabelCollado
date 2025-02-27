import { NavLink } from 'react-router-dom';

const CharacterCard = ({ eachCharacter }) => {
  return (
    <NavLink to={`/character/${eachCharacter.id}`}>
      <li className="list_character">
        <img
          className="list_character_img"
          src={eachCharacter.image}
          alt={eachCharacter.name}
        />
        <div className="list_character_div">
          <p className="list_character_name">{eachCharacter.name}</p>
          <p className="list_character_species">{eachCharacter.species}</p>
        </div>
      </li>
    </NavLink>
  );
};

export default CharacterCard;
