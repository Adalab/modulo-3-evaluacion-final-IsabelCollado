import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../service/api';
import Filter from './Filters/Filter';
import CharacterList from './List/CharacterList';
import CharacterDetails from './CharacterDetails';
import Footer from './Footer';
import NotFoundCharacter from './NotFoundCharacter';
import Landing from './Landing';
import '../styles/App.scss';

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

  const filterCharacterName = characterList
    .filter((eachCharacter) => {
      return eachCharacter.name
        .toLocaleLowerCase()
        .includes(searchName.toLocaleLowerCase());
    })
    .filter((eachCharacter) => {
      return selectedGender === 'all'
        ? true
        : eachCharacter.gender === selectedGender;
    });

  const findCharacter = (value) => {
    return characterList.find((eachCharacter) => eachCharacter.id === value);
  };

  return (
    <div className="App">
      <main className="main">
        <Routes>
          <Route path="/" element={<Landing></Landing>}></Route>

          <Route
            path="/house"
            element={
              <>
                <Filter
                  setSearchName={setSearchName}
                  setselectHouse={setselectHouse}
                  setSelectedGender={setSelectedGender}
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
                    `There are no characters that match ${searchName}`
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
                findCharacter={findCharacter}
              ></CharacterDetails>
            }
          ></Route>
          <Route path="*" element={<NotFoundCharacter />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
