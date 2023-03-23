import { NavLink, useParams } from 'react-router-dom';
import '../styles/App.scss';
import Gryffindor from '../images/Gryffindor.png';
import Hufflepuff from '../images/Hufflepuff.png';
import Ravenclaw from '../images/Ravenclaw.png';
import Slytherin from '../images/Slytherin.png';
import yes from '../images/icons8-corazón-con-pulso-48.png';
import no from '../images/icons8-skull-heart-45.png';
import NotFoundCharacter from './NotFoundCharacter';

const CharacterDetails = ({ findCharacter }) => {
  const params = useParams();
  const characterSelected = findCharacter(params.id);

  const houseClass = () => {
    if (characterSelected.house === 'Gryffindor') {
      return `${Gryffindor}`;
    } else if (characterSelected.house === 'Slytherin') {
      return `${Slytherin}`;
    } else if (characterSelected.house === 'Ravenclaw') {
      return `${Ravenclaw}`;
    } else if (characterSelected.house === 'Hufflepuff') {
      return `${Hufflepuff}`;
    }
  };

  if (characterSelected !== undefined) {
    return characterSelected && characterSelected.id ? (
      <>
        <NavLink className="return" to="/house">
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
                <span className="span_details_title">
                  House: {characterSelected.house}
                </span>
                <img src={houseClass()} alt="" className="detail_house_img" />
              </li>
            </ul>
          </div>
        </article>
      </>
    ) : (
      <main>
        <NotFoundCharacter />
      </main>
    );
  }
};

export default CharacterDetails;
