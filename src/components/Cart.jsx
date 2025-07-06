import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    console.log("🛒 Carrito actual:", cart);
    console.log("💵 Total actual:", total);
  }, [cart, total]);

  const handleRemove = (id) => {
    console.log(`❌ Eliminando producto con ID: ${id}`);
    removeItem(id);
  };

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>El carrito está vacío</h2>
        <Link to="/" className="btn btn-dark mt-3">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Carrito de compras</h2>
      {cart.map(item => (
        <div key={item.id} className="border-bottom py-2">
          <h5>{item.title}</h5>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio unitario: ${item.price}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>
          <button className="btn btn-sm btn-danger" onClick={() => handleRemove(item.id)}>
            Eliminar
          </button>
        </div>
      ))}
      <h4 className="mt-4">Total: ${total}</h4>
      <button className="btn btn-warning mt-3 me-2" onClick={() => {
        console.log("🧹 Vaciando carrito...");
        clearCart();
      }}>
        Vaciar carrito
      </button>
      <Link to="/checkout" className="btn btn-success mt-3">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
