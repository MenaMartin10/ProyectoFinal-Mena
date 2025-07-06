import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/img/MenaStoreLogo.webp';

const NavBar = () => {
  console.log("🔝 Renderizando NavBar");

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand mb-0 h1" to="/">
        <img src={logo} alt="Mena Store" height="100" width="150" />
      </Link>
      <div className="d-flex gap-4">
        <Link className="nav-link text-white" to="/category/hombre">Hombre</Link>
        <Link className="nav-link text-white" to="/category/mujer">Mujer</Link>
        <Link className="nav-link text-white" to="/category/ofertas">Ofertas</Link>
      </div>
      <div className="d-flex">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
