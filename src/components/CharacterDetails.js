import { NavLink, useParams } from 'react-router-dom';
import '../styles/App.scss';

import yes from '../images/icons8-corazón-con-pulso-48.png';
import no from '../images/icons8-skull-heart-45.png';
const CharacterDetails = ({ characterList }) => {
  const { id } = useParams();
  const characterSelected = characterList.find(
    (eachCharacter) => eachCharacter.id === id
  );
  if (characterSelected !== undefined) {
    return (
      <>
        <NavLink className="return" to="/">
          Volver página principal
        </NavLink>
        <article className="article">
          <div className="card_details">
            <img
              className="img_details"
              src={characterSelected.image}
              alt={characterSelected.name}
            />

            <ul className="ul_details">
              <li className="list_details">
                <h2 className="name_details">{characterSelected.name}</h2>
              </li>
              <li className="status">
                Estatus:{' '}
                {characterSelected.alive === true ? (
                  <>
                    Vivo/a{'  '}
                    <img
                      src={yes}
                      alt="heart"
                      title="heart"
                      className="heart_yes"
                    />
                  </>
                ) : (
                  <>
                    Muerto/a{'  '}
                    <img
                      src={no}
                      alt="skull"
                      title="heart"
                      className="skull_no"
                    />
                  </>
                )}
              </li>
              <li className="list_details">
                <span className="span_details_title">Species:</span>
                <span className="span_details">
                  {characterSelected.species}
                </span>
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
      </>
    );
  }
};

export default CharacterDetails;
