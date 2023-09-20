const FilterGender = ({ selectedGender, handleSelectGender }) => {
  const handleChange = (ev) => {
    handleSelectGender(ev.target.value);
  };

  return (
    <>
      <label htmlFor="gender" className="select">
        Select a genre:
        <select
          className="input_search"
          name="gender"
          id="gender"
          onChange={handleChange}
          value={selectedGender}
        >
          <option value="all" className="select--option">
            All
          </option>
          <option value="female" className="select--option">
            Female
          </option>
          <option value="male" className="select--option">
            Male
          </option>
        </select>
      </label>
    </>
  );
};

export default FilterGender;
