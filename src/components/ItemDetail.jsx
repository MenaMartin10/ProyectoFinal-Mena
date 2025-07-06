import { useState, useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  const [agregado, setAgregado] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    console.log("📦 Producto recibido en ItemDetail:", producto);
  }, [producto]);

  const handleAdd = (cantidad) => {
    const unidadTexto = cantidad === 1 ? "unidad" : "unidades";
    console.log(`🛒 Agregando ${cantidad} ${unidadTexto} de "${producto.title}" al carrito`);
    setAgregado(true);
    addToCart(producto, cantidad);
  };

  return (
    <div className="text-center">
      <img src={producto.image} alt={producto.title} style={{ maxWidth: '300px' }} />
      <h2>{producto.title}</h2>
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      {agregado ? (
        <p className="mt-3">Producto agregado al carrito ✅</p>
      ) : (
        <ItemCount stock={10} onAdd={handleAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
