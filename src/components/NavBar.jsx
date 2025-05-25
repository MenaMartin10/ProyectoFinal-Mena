import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark w-100 justify-content-center">
      <div className="container d-flex justify-content-between align-items-center px-4">
        <span className="navbar-brand mb-0 h1">MenaStore</span>
        <div className="d-flex gap-4">
          <a className="nav-link text-white" href="#">Hombre</a>
          <a className="nav-link text-white" href="#">Mujer</a>
          <a className="nav-link text-white" href="#">Ofertas</a>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;