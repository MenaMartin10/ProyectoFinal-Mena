// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './App.css';
import './index.css';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <div id="root" className="d-flex flex-column min-vh-100">
        <div className="app-container flex-grow-1">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Mena Store!" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrado por categoría" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
