// src/components/ItemCount.jsx
import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(1);

  const sumar = () => {
    if (cantidad < stock) {
      const nuevaCantidad = cantidad + 1;
      console.log(`➕ Aumentando cantidad: ${nuevaCantidad}`);
      setCantidad(nuevaCantidad);
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      const nuevaCantidad = cantidad - 1;
      console.log(`➖ Disminuyendo cantidad: ${nuevaCantidad}`);
      setCantidad(nuevaCantidad);
    }
  };

  const handleAgregar = () => {
    console.log(`🛍️ Agregando al carrito: ${cantidad} unidad(es)`);
    onAdd(cantidad);
  };

  return (
    <div className="mt-3">
      <div className="d-flex justify-content-center align-items-center mb-2">
        <button className="btn btn-secondary me-2" onClick={restar}>-</button>
        <span>{cantidad}</span>
        <button className="btn btn-secondary ms-2" onClick={sumar}>+</button>
      </div>
      <button className="btn btn-dark" onClick={handleAgregar}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
