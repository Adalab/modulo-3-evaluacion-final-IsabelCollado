import FilterName from './FilterName';
import FilterHouse from './FilterHouse';

const Filter = ({
  handleInputFilter,
  searchName,
  selectHouse,
  handleSelectHouse,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
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
      </form>
    </section>
  );
};

export default Filter;
