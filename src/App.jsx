import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
  <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Mena Store!" />} />
  <Route path="/category/:categoryId" element={<ItemListContainer greeting="Filtrado por categoría" />} />
  <Route path="/item/:itemId" element={<ItemDetailContainer />} />
  <Route path="*" element={<NotFound />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;