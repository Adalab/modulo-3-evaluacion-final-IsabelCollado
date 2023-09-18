const ResetBtn = ({ setSearchName, setselectHouse, setSelectedGender }) => {
  const handleClickBtn = () => {
    setSearchName('');
    setselectHouse('Gryffindor');
    setSelectedGender('all');
  };

  return (
    <button className="btn_reset" onClick={handleClickBtn}>
      Reset
    </button>
  );
};

export default ResetBtn;
