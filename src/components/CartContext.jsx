import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const exist = cart.find(prod => prod.id === item.id);
    if (exist) {
      const updatedCart = cart.map(prod =>
        prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const clearCart = () => setCart([]);

  const removeItem = (id) => setCart(cart.filter(prod => prod.id !== id));

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider; 
