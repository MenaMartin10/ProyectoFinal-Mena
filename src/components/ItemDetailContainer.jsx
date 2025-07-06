import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductoById } from '../services/firebase';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    console.log("🔍 Buscando producto con ID:", id);
    
    getProductoById(id)
      .then(res => {
        console.log("✅ Producto encontrado:", res);
        setProducto(res);
      })
      .catch(err => console.error("❌ Error al obtener el producto:", err));
  }, [id]);

  if (!producto) return <p className="mt-5">Cargando producto...</p>;

  return (
    <div className="container mt-5">
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
