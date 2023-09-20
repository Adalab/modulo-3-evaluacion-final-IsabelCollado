const FilterName = ({ handleInputFilter, searchName }) => {
  const handleInput = (ev) => {
    handleInputFilter(ev.target.value);
  };
  return (
    <>
      <label htmlFor="searchCharacter" className="select">
        Search by character:
        <input
          className="input_search"
          type="text"
          autoComplete="off"
          name="name"
          id="name"
          placeholder="example: Harry"
          onInput={handleInput}
          value={searchName}
        />
      </label>
    </>
  );
};

export default FilterName;
