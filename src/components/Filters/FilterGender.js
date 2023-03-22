const FilterGender = ({ selectedGender, handleSelectGender }) => {
  const handleSelect = (ev) => {
    handleSelectGender(ev.target.value);
  };

  return (
    <>
      <label htmlFor="selectGender" className="select">
        Selecciona un género:
      </label>
      <select
        className="select"
        name="select gender"
        id="selectGender"
        onChange={handleSelect}
        value={selectedGender}
      >
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
      </select>
    </>
  );
};

export default FilterGender;
