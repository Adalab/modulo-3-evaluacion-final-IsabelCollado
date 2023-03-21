import FilterName from './FilterName';
import FilterHouse from './FilterHouse';

const Filter = ({
  handleInputFilter,
  searchName,
  selectHouse,
  handleSelectHouse,
}) => {
  return (
    <section className="search_section">
      <form action="./" className="form_section">
        <FilterName
          handleInputFilter={handleInputFilter}
          searchName={searchName}
        ></FilterName>
        <FilterHouse
          handleSelectHouse={handleSelectHouse}
          selectHouse={selectHouse}
        ></FilterHouse>
      </form>
    </section>
  );
};

export default Filter;
