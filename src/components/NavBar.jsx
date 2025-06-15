import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand mb-0 h1" to="/">Mena Store</Link>
      <div className="d-flex gap-4">
        <Link className="nav-link text-white" to="/category/hombre">Hombre</Link>
        <Link className="nav-link text-white" to="/category/mujer">Mujer</Link>
        <Link className="nav-link text-white" to="/category/ofertas">Ofertas</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;