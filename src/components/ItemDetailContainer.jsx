import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productos } from "../data/products";
import ItemCount from "./ItemCount"; 

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((p) => p.id === itemId));
      }, 1000);
    });

    fetchItem.then((res) => setItem(res));
  }, [itemId]);

  const handleAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades al carrito`);
  };

  return (
    <div className="container mt-4 text-center">
      {item ? (
        <div className="card mx-auto" style={{ maxWidth: "400px" }}>
          <img src={item.image} className="card-img-top" alt={item.title} />
          <div className="card-body">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-text">
              {item.description || "Producto de excelente calidad."}
            </p>
            <p className="card-text fw-bold">${item.price}</p>
            
            <ItemCount stock={10} initial={1} onAdd={handleAdd} />
          </div>
        </div>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
