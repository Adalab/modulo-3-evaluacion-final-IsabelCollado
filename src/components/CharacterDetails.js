import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
const CharacterDetails = ({ character }) => {
  const { characterId } = useParams();
  const characterSelected = character.find(
    (eachCharacter) => eachCharacter.id === characterId
  );
  return (
    <>
      <Header />
      <div class="card">
        <h2>{characterSelected.name}</h2>
      </div>
      <Footer />
    </>
  );
};

export default CharacterDetails;
