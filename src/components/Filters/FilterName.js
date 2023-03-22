const FilterName = ({ handleInputFilter, searchName }) => {
  const handleInput = (ev) => {
    handleInputFilter(ev.target.value);
  };
  return (
    <>
      <label htmlFor="searchCharacter" className="input_text">
        Buscar por personaje:
      </label>
      <input
        className="input_search"
        type="text"
        autoComplete="off"
        name="name"
        id="name"
        placeholder="ejemplo: Harry"
        onInput={handleInput}
        value={searchName}
      />
    </>
  );
};

export default FilterName;
