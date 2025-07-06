import { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import { collection, addDoc, getFirestore, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [ordenId, setOrdenId] = useState('');
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    console.log("🧾 Carrito al ingresar al Checkout:", cart);
    console.log("💵 Total calculado:", total);
  }, [cart, total]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orden = {
      comprador: { nombre, email },
      items: cart,
      total,
      fecha: serverTimestamp()
    };

    console.log("📦 Generando orden con los siguientes datos:", orden);

    const db = getFirestore();
    const ordersRef = collection(db, 'ordenes');

    try {
      const docRef = await addDoc(ordersRef, orden);
      console.log("✅ Orden generada con ID:", docRef.id);
      setOrdenId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("❌ Error al generar la orden:", error);
    }
  };

  if (ordenId) {
    return (
      <div className="container mt-5 text-center">
        <h2>¡Gracias por tu compra!</h2>
        <p>ID de orden: <strong>{ordenId}</strong></p>
        <button onClick={() => navigate('/')} className="btn btn-dark mt-3">Volver al inicio</button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark">Generar orden</button>
      </form>
    </div>
  );
};

export default Checkout;
