import { Link } from 'react-router-dom';
import Welcome from '../images/harry-potter-hogwart.png';


const Landing = () => {
  return (
    <>
      <Link to="/house" className="button">
        Entrar en Hogwarts!!
      </Link>
    
      <h1 className="landing-title">Bienvenidos a Hogwarts</h1>
      <div
        style={{
          backgroundImage: `url(${Welcome})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          marginBottom: '25rem',
          width: '90vw',
          height: '100vh',
        }}
      ></div>
    </>
  );
};

export default Landing;
