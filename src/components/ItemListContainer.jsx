import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProductos } from '../services/firebase';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("📦 Cargando productos...");
    if (categoryId) {
      console.log("📂 Filtro por categoría:", categoryId);
    }

    getProductos()
      .then((data) => {
        console.log("✅ Productos totales cargados:", data.length);
        if (categoryId) {
          const filtrados = data.filter((p) => p.category === categoryId);
          console.log(`🔍 Productos filtrados por '${categoryId}':`, filtrados.length);
          setItems(filtrados);
        } else {
          setItems(data);
        }
      })
      .catch((error) => {
        console.error("❌ Error al cargar productos:", error);
      });
  }, [categoryId]);

  return (
    <div className="container mt-4 text-center">
      <h2>{greeting}</h2>
      <ItemList productos={items} />
    </div>
  );
};

export default ItemListContainer;
