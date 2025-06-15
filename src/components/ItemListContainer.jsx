  import { useParams } from 'react-router-dom';
  import { useEffect, useState } from 'react';
  import ItemList from './ItemList';
  import { productos } from '../data/products'; 

  const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
      const fetchProductos = new Promise((resolve) => {
        setTimeout(() => {
          resolve(categoryId
            ? productos.filter(p => p.category === categoryId)
            : productos);
        }, 500);
      });

      fetchProductos.then(res => setItems(res));
    }, [categoryId]);

    return (
      <div className="container mt-4 text-center">
        <h2>{greeting}</h2>
        <ItemList productos={items} />
      </div>
    );
  };

  export default ItemListContainer;