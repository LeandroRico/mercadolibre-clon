import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Parece que esta página no existe</h2>
      <Link to='/' className='not-found__link'>
        Ir a la página principal
      </Link>
    </div>
  );
};

export default NotFound;
