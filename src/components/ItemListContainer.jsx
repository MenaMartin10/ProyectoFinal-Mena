import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProductos } from '../services/firebase';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [noResultados, setNoResultados] = useState(false);

  const query = new URLSearchParams(location.search);
  const search = query.get('buscar');

  useEffect(() => {
    console.log("📦 Cargando productos...");
    if (categoryId) console.log("📂 Filtrando por categoría:", categoryId);
    if (search) console.log("🔍 Buscando por palabra clave:", search);

    getProductos()
      .then((data) => {
        let filtrados = data;

        if (categoryId) {
          filtrados = filtrados.filter(p => p.category.includes(categoryId));
        }

        if (search) {
          const texto = search.toLowerCase();
          filtrados = filtrados.filter(p =>
            p.title.toLowerCase().includes(texto) ||
            p.category.toLowerCase().includes(texto)
          );
        }

        if (filtrados.length === 0) {
          console.warn("⚠️ No se encontraron productos.");
          setNoResultados(true);
        } else {
          setNoResultados(false);
        }

        setItems(filtrados);
      })
      .catch((error) => {
        console.error("❌ Error al cargar productos:", error);
      });
  }, [categoryId, search]);

  return (
    <div className="container mt-4 text-center">
      <h2>{greeting}</h2>
      {noResultados ? (
        <p className="mt-4 text-danger">No se encontraron productos para tu búsqueda.</p>
      ) : (
        <ItemList productos={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
