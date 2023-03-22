import { NavLink, useParams } from 'react-router-dom';
//mport yes from '../images/icons8-corazón-con-pulso-48.png';
//import no from '../images/icons8-skull-heart-45.png';
const CharacterDetails = ({ characterList }) => {
  const { id } = useParams();
  const characterSelected = characterList.find(
    (eachCharacter) => eachCharacter.id === id
  );
  return (
    <article>
      <NavLink to="/"> Go back</NavLink>
      <div className="card">
        <img src={characterSelected.image} alt={characterSelected.name} />
      </div>
      <h2>{characterSelected.name}</h2>
      <ul>
        <li>
          <span>Status</span>
          <span>{characterSelected.alive === true ? 'yes' : 'No'}</span>
        </li>
        <li>
          <span>Species</span>
          <span>{characterSelected.species}</span>
        </li>
        <li>
          <span>Gender</span>
          <span>{characterSelected.gender}</span>
        </li>
        <li>
          <span>House</span>
          <span>{characterSelected.house}</span>
        </li>
      </ul>
    </article>
  );
};

export default CharacterDetails;
