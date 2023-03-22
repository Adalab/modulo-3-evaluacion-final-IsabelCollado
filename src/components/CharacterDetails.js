import { NavLink, useParams } from 'react-router-dom';
import '../styles/App.scss';
//mport yes from '../images/icons8-corazón-con-pulso-48.png';
//import no from '../images/icons8-skull-heart-45.png';
const CharacterDetails = ({ characterList }) => {
  const { id } = useParams();
  const characterSelected = characterList.find(
    (eachCharacter) => eachCharacter.id === id
  );
  if (characterSelected !== undefined) {
    return (
      <article className="article">
        <NavLink className="return" to="/">
          Volver página principal
        </NavLink>
        <div className="card_details">
          <img
            className="img_details"
            src={characterSelected.image}
            alt={characterSelected.name}
          />

          <h2 className="name_details">{characterSelected.name}</h2>
          <ul>
            <li className="list_details">
              <span className="span_details">Status: </span>
              <span className="span_details">
                {characterSelected.alive === true ? 'yes' : 'No'}
              </span>
            </li>
            <li className="list_details">
              <span className="span_details_title">Species:</span>
              <span className="span_details">{characterSelected.species}</span>
            </li>
            <li className="list_details">
              <span className="span_details_title">Gender:</span>
              <span className="span_details">{characterSelected.gender}</span>
            </li>
            <li className="list_details">
              <span className="span_details_title">House:</span>
              <span className="span_details">{characterSelected.house}</span>
            </li>
          </ul>
        </div>
      </article>
    );
  }
};

export default CharacterDetails;
