const ResetBtn = ({ handleClickBtn }) => {
  const handelResetBtn = () => {
    handleClickBtn();
  };

  return (
    <button className="btn_reset" onClick={handelResetBtn}>
      Reset
    </button>
  );
};

export default ResetBtn;
