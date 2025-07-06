import { Link, useNavigate } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/img/MenaStoreLogo.webp';
import { useState } from 'react';

const NavBar = () => {
  console.log("Renderizando NavBar");

  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  const handleBuscar = (e) => {
    e.preventDefault();
    console.log("🔎 Buscando:", busqueda);
    if (busqueda.trim() !== '') {
      navigate(`/?buscar=${busqueda.trim()}`);
    }
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-0">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* Logo al fondo izquierda */}
        <div className="d-flex align-items-center ms-3">
          <Link className="navbar-brand mb-0 h1 me-3" to="/">
            <img src={logo} alt="Mena Store" height="100" width="160" />
          </Link>

          {/* Buscador al lado del logo */}
          <form className="d-flex" onSubmit={handleBuscar}>
            <input
              type="text"
              className="form-control me-2"
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{ width: '200px' }}
            />
            <button className="btn btn-outline-light" type="submit">Buscar</button>
          </form>
        </div>

        {/* Menú centrado */}
        <div className="d-flex gap-4">
          <Link className="nav-link text-white" to="/category/hombre">Hombre</Link>
          <Link className="nav-link text-white" to="/category/mujer">Mujer</Link>
          <Link className="nav-link text-white" to="/category/ofertas">Ofertas</Link>
        </div>

        {/* Carrito a la derecha */}
        <div className="d-flex me-3">
          <CartWidget />
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
