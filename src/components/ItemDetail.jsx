import { useState, useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  const [agregado, setAgregado] = useState(false);
  const { addToCart } = useContext(CartContext);
  const [mostrarZoom, setMostrarZoom] = useState(false);

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
    <div className="text-center" style={{ margin: '80px' }}>
      {/* Imagen clickeable */}
      <img
        src={producto.image}
        alt={producto.title}
        style={{ maxWidth: '300px', cursor: 'pointer' }}
        onClick={() => setMostrarZoom(true)}
      />

      <h2>{producto.title}</h2>
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>

      {agregado ? (
        <>
          <p className="mt-3">Producto agregado al carrito ✅</p>
          <Link to="/" className="btn btn-dark mt-2">Volver al inicio</Link>
        </>
      ) : (
        <>
          <ItemCount stock={10} onAdd={handleAdd} />
          <Link to="/" className="btn btn-dark mt-3">Volver al inicio</Link>
        </>
      )}

      {/* Modal simple para zoom */}
      {mostrarZoom && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1050 }}
          onClick={() => setMostrarZoom(false)}
        >
          <img
            src={producto.image}
            alt={producto.title}
            style={{ maxWidth: '90%', maxHeight: '90%', border: '5px solid white', borderRadius: '8px' }}
          />
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
