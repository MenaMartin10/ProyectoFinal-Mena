import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="d-flex flex-column align-items-center">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Mena Store, nuestra tienda online!" />
    </div>
  );
}

export default App;