import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div className="d-flex flex-column align-items-center gap-2">
      <div className="d-flex gap-2 align-items-center">
        <button className="btn btn-outline-secondary" onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button className="btn btn-outline-secondary" onClick={incrementar}>+</button>
      </div>
      <button className="btn btn-success" onClick={() => onAdd(cantidad)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
