import { Link } from 'react-router-dom';
import titleHarry from '../images/titleHarry.png.png';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={titleHarry} alt="title Harry" className="title_header" />
      </Link>
    </header>
  );
};

export default Header;
