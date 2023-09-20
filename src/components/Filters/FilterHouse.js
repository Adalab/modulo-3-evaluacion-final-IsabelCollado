const FilterHouse = ({ handleSelectHouse, selectHouse }) => {
  const handleSelec = (ev) => {
    handleSelectHouse(ev.target.value);
  };
  return (
    <>
      <label htmlFor="selectHouse" className="select">
        Select the house:
        <select
          className="input_search"
          name="select house"
          id="selectHouse"
          onChange={handleSelec}
          value={selectHouse}
        >
          <option value="Gryffindor" className="select--option">
            Gryffindor
          </option>
          <option value="Slytherin" className="select--option">
            Slytherin
          </option>
          <option value="Hufflepuff" className="select--option">
            Hufflepuff
          </option>
          <option value="Ravenclaw " className="select--option">
            Ravenclaw
          </option>
        </select>
      </label>
    </>
  );
};

export default FilterHouse;
