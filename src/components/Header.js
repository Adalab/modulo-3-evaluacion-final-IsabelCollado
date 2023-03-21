import titleHarry from '../images/titleHarry.png.png';

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>
          <img src={titleHarry} alt="title Harry" className="title_header" />
        </h1>
      </header>
    </>
  );
};

export default Header;
