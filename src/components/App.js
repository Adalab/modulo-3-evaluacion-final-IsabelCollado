import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../service/api';
import '../styles/App.scss';
import Filter from './Filters/Filter';
import CharacterList from './List/CharacterList';
import CharacterDetails from './CharacterDetails';
import Header from './Header';
import Footer from './Footer';
import ResetBtn from './Reset';
import NotFoundCharacter from './NotFoundCharacter';

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [selectHouse, setselectHouse] = useState('Gryffindor');
  const [selectedGender, setSelectedGender] = useState('all');

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
  const handleSelectGender = (value) => {
    setSelectedGender(value);
  };

  const handleClickBtn = () => {
    setCharacterList('');
    setselectHouse('Gryffindor');
    setSelectedGender('all');
    window.location.reload();
  };

  const filterCharacterName = characterList
    .filter((eachCharacter) =>
      eachCharacter.name
        .toLocaleLowerCase()
        .includes(searchName.toLocaleLowerCase())
    )
    .filter((eachCharacter) => {
      return selectedGender === 'all'
        ? true
        : eachCharacter.gender === selectedGender;
    });

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
                  <ResetBtn handleClickBtn={handleClickBtn} />
                  <Filter
                    searchName={searchName}
                    handleInputFilter={handleInputFilter}
                    selectHouse={selectHouse}
                    handleSelectHouse={handleSelectHouse}
                    selectedGender={selectedGender}
                    handleSelectGender={handleSelectGender}
                  ></Filter>
                  <section className="errormsg">
                    {filterCharacterName.length > 0 ? (
                      <CharacterList characterList={filterCharacterName} />
                    ) : (
                      `No hay personajes que coincidan con ${searchName}`
                    )}
                  </section>
                </>
              }
            ></Route>
            <Route
              path="/character/:id"
              element={
                <CharacterDetails
                  characterList={characterList}
                ></CharacterDetails>
              }
            ></Route>
            <Route path="*" element={<NotFoundCharacter />} />
          </Routes>
        </main>
        <Footer />
      </>
    </div>
  );
}

export default App;
