import titleHarry from '../images/titleHarry.png.png';
import Audio from './audio';
const Header = () => {
  return (
    <header className="header">
      <div className="div_img_header">
        <img src={titleHarry} alt="title Harry" className="title_header" />
      </div>
      <Audio />
    </header>
  );
};

export default Header;
