/* SECCIÓN DE IMPORT */

//import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CallToApi from '../service/api';

//import darkHarry from '../images/faviHarry.png';
//import heartPulse from '../images/icons8-corazón-con-pulso-48.png';
//import skull from '../images/icons8-skull-heart-45.png';
import '../styles/App.scss';
import Filter from './Filters/Filter';
import CharacterList from './List/CharacterList';
import CharacterDetails from './CharacterDetails';
import Header from './Header';
import Footer from './Footer';

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
  const [characterList, setCharacterList] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [selectHouse, setselectHouse] = useState('Gryffindor');

  /* EFECTOS (código cuando carga la página) */
  useEffect(() => {
    CallToApi(selectHouse).then((cleanData) => {
      setCharacterList(cleanData);
    });
  }, [selectHouse]);

  /* FUNCIONES HANDLER */

  const handleInputFilter = (value) => {
    setSearchName(value);
  };
  const handleSelectHouse = (value) => {
    setselectHouse(value);
  };

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  const filterCharacter = characterList.filter((eachCharacter) => {
    return eachCharacter.name
      .toLocaleLowerCase()
      .includes(searchName.toLocaleLowerCase());
  });

  /* HTML */
  return (
    <div className="App">
      <>
        <Header />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Filter
                    searchName={searchName}
                    handleInputFilter={handleInputFilter}
                    selectHouse={selectHouse}
                    handleSelectHouse={handleSelectHouse}
                  ></Filter>

                  <CharacterList filterCharacter={filterCharacter} />
                </>
              }
            ></Route>
            <Route
              path="/character/:characterId"
              element={
                <CharacterDetails character={characterList}></CharacterDetails>
              }
            ></Route>
          </Routes>
        </main>
        <Footer />
      </>
    </div>
  );
}
/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
