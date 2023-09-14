import FilterName from './FilterName';
import FilterHouse from './FilterHouse';
import FilterGender from './FilterGender';
import Header from '../Header';
import ResetBtn from '../Reset';
const Filter = ({
  handleInputFilter,
  searchName,
  selectHouse,
  handleSelectHouse,
  selectedGender,
  handleSelectGender,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <Header />
      <section className="search_section">
        <form action="./" className="form_section" onSubmit={handleSubmit}>
          <FilterName
            handleInputFilter={handleInputFilter}
            searchName={searchName}
          ></FilterName>
          <FilterHouse
            handleSelectHouse={handleSelectHouse}
            selectHouse={selectHouse}
          ></FilterHouse>
          <FilterGender
            handleSelectGender={handleSelectGender}
            selectedGender={selectedGender}
          />
          <ResetBtn />
        </form>
      </section>
    </>
  );
};

export default Filter;
