import darkHarry from '../images/faviHarry.png';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <img className="icono_footer" src={darkHarry} alt="darkHarry" />
        <span className="footer-copy">
          &copy Module-3|| Isabel Collado Herrera
        </span>
      </footer>
    </>
  );
};

export default Footer;
