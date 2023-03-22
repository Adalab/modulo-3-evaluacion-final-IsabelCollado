const FilterHouse = ({ handleSelectHouse, selectHouse }) => {
  const handleSelec = (ev) => {
    handleSelectHouse(ev.target.value);
  };
  return (
    <>
      <label htmlFor="selectHouse" className="select">
        Selecciona la casa:
      </label>
      <select
        className="select"
        name="select house"
        id="selectHouse"
        onChange={handleSelec}
        value={selectHouse}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw ">Ravenclaw</option>
      </select>
    </>
  );
};

export default FilterHouse;
