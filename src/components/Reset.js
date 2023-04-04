const ResetBtn = ({ handleClickBtn }) => {
  const handelResetBtn = () => {
    handleClickBtn();
  };

  return (
    <button className="btn_reset" type="button" onClick={handelResetBtn}>
      Reset
    </button>
  );
};

export default ResetBtn;
