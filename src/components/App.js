/* SECCIÓN DE IMPORT */

import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../service/api';
import '../styles/App.scss';
import Filter from './Filters/Filter';
import CharacterList from './List/CharacterList';
import CharacterDetails from './CharacterDetails';
import Header from './Header';
import Footer from './Footer';
import ResetBtn from './Reset';
function App() {
  const [characterList, setCharacterList] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [selectHouse, setselectHouse] = useState('Gryffindor');

  useEffect(() => {
    api.getCharactersHouse(selectHouse).then((infoCharacters) => {
      setCharacterList(infoCharacters);
    });
  }, [selectHouse]);

  const handleInputFilter = (value) => {
    setSearchName(value);
  };
  const handleSelectHouse = (value) => {
    setselectHouse(value);
  };
  const handleClickBtn = () => {
    setCharacterList('');
    setselectHouse('Gryffindor');
    window.location.reload();
  };

  const filterCharacterName = (eachCharacter) =>
    eachCharacter.name
      .toLocaleLowerCase()
      .includes(searchName.toLocaleLowerCase());

  const renderFilteredList = () => {
    return characterList.filter(filterCharacterName);
  };

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
                  <ResetBtn handleClickBtn={handleClickBtn} />
                  <CharacterList characterList={renderFilteredList()} />
                </>
              }
            ></Route>
            <Route
              path="/character/:Id"
              element={
                <CharacterDetails
                  characterList={characterList}
                ></CharacterDetails>
              }
            ></Route>
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </main>
        <Footer />
      </>
    </div>
  );
}

export default App;
