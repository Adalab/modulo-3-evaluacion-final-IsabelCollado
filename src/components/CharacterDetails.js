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
        <main className="main_details">
          <div className="main_details_div">
            <NavLink className="main_details_div_return" to="/house">
              <span class="material-symbols-outlined">arrow_back</span>
            </NavLink>
          </div>
          <div className="card_details">
            <article className="card_details_article">
              <div className="card_details_div">
                <img
                  className="card_details_img"
                  src={characterSelected.image}
                  alt={characterSelected.name}
                />
              </div>
              <article className="card_details_article_descrip">
                <h2 className="card_details_article_title">
                  {characterSelected.name}
                </h2>
                <div className="card_details_article_status">
                  {characterSelected.alive === true ? (
                    <>
                      <img
                        src={yes}
                        alt="heart"
                        title="heart"
                        className="card_details_article_status_yes"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={no}
                        alt="skull"
                        title="heart"
                        className="card_details_article_status_no"
                      />
                    </>
                  )}
                </div>
                <div className="card_details_article_p">
                  <p className="card_details_article_species">
                    Species : {characterSelected.species}
                  </p>

                  <p className="card_details_article_gender">
                    Gender : {characterSelected.gender}
                  </p>

                  <p className="card_details_article_house">
                    House : {characterSelected.house}
                  </p>
                </div>
              </article>
            </article>
            <div className="card_details_banner">
              <img
                src={houseClass()}
                alt={houseClass()}
                className="card_details_banner_img"
              />
            </div>
          </div>
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
