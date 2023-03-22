const FilterGender = ({ handleGenderFilter, filterGender }) => {
  const handleGenderChecked = (ev) => {
    handleGenderFilter(ev.target.value);
  };
  return (
    <>
      <label className="input_radio"> Todos los Géneros:</label>
      <input
        type="radio"
        id="all"
        name="all"
        value="all"
        checked={filterGender === 'all'}
        onChange={handleGenderChecked}
      ></input>
      <label className="input_radio"> Masculino:</label>
      <input
        type="radio"
        id="male"
        name="male"
        value="male"
        checked={filterGender === 'male'}
        onChange={handleGenderChecked}
      ></input>
      <label className="input_radio"> Femenino:</label>
      <input
        type="radio"
        id="female"
        name="female"
        value="female"
        checked={filterGender === 'female'}
        onChange={handleGenderChecked}
      ></input>
    </>
  );
};

export default FilterGender;
