import { Link } from 'react-router-dom';
import gif404 from '../assets/img/error404.gif';

const NotFound = () => {
  console.log("404NotFound");
  return (
    <div className="container text-center mt-5">
      <img src={gif404} alt="404NotFound" style={{ maxWidth: '300px' }} className="mb-4" />
      <h2 className="mb-3">Página no encontrada</h2>
      <p className="mb-4">La ruta ingresada no existe.</p>
      <Link to="/" className="btn btn-dark">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;