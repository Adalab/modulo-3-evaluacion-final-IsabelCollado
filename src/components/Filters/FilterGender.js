const FilterGender = ({ selectedGender, handleSelectGender }) => {
  const handleChange = (ev) => {
    handleSelectGender(ev.target.value);
  };

  return (
    <>
      <label htmlFor="gender" className="select">
        Selecciona un género:
      </label>
      <select
        className="select"
        name="gender"
        id="gender"
        onChange={handleChange}
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
