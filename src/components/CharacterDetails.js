import { NavLink, useParams } from 'react-router-dom';
import '../styles/App.scss';
import Header from './Header';
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
        <Header />
        <main className="main--details">
          <div className="div--icon">
            <NavLink className="return" to="/house">
              <span class="material-symbols-outlined">arrow_back</span>
            </NavLink>
          </div>
          <section className="card_details">
            <article className="article">
              <div>
                <h2 className="name_details">{characterSelected.name}</h2>
                <img
                  className="img_details"
                  src={characterSelected.image}
                  alt={characterSelected.name}
                />
              </div>
              <section className="section--p">
                <p className="status">
                  Estatus:
                  {characterSelected.alive === true ? (
                    <>
                      live
                      <img
                        src={yes}
                        alt="heart"
                        title="heart"
                        className="heart_yes"
                      />
                    </>
                  ) : (
                    <>
                      dead
                      <img
                        src={no}
                        alt="skull"
                        title="heart"
                        className="skull_no"
                      />
                    </>
                  )}
                </p>

                <p className="span_details_title">Species:</p>
                <p className="span_details">{characterSelected.species}</p>

                <p className="span_details_title">Gender:</p>
                <p className="span_details">{characterSelected.gender}</p>

                <p className="span_details_title">
                  House: {characterSelected.house}
                </p>
              </section>
              <div className="detail--div">
                <img src={houseClass()} alt="" className="detail_house_img" />
              </div>
            </article>
          </section>
        </main>
      </>
    ) : (
      <span>
        <NotFoundCharacter />
      </span>
    );
  }
};

export default CharacterDetails;
