import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="landing">
      <Link to="/house/">
        <input type="button" value="Welcome" className="landing__btn" />
      </Link>
    </section>
  );
};

export default Landing;
