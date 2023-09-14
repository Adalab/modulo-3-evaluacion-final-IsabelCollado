const FilterGender = ({ selectedGender, handleSelectGender }) => {
  const handleChange = (ev) => {
    handleSelectGender(ev.target.value);
  };

  return (
    <>
      <label htmlFor="gender" className="select">
        Select a genre:
      </label>
      <select
        className="select"
        name="gender"
        id="gender"
        onChange={handleChange}
        value={selectedGender}
      >
        <option value="all">All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
    </>
  );
};

export default FilterGender;
