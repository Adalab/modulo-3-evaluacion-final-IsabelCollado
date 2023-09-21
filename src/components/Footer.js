import darkHarry from '../images/faviHarry.png';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <img className="footer_icon" src={darkHarry} alt="darkHarry" />
        <span className="footer_copy">
          Made it with 💜 by Isabel Collado Herrera
        </span>
        <div className="footer_media">
          <a
            href="https://github.com/IsabelCollado"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/isabel-collado-herrera/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
