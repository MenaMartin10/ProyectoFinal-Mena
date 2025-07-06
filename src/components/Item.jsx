import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ prod }) => {
  console.log("🧩 Renderizando item:", prod);

  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={prod.image} className="card-img-top" alt={prod.title} />
      <div className="card-body">
        <h5 className="card-title">{prod.title}</h5>
        <p className="card-text">${prod.price}</p>
        <Link to={`/item/${prod.id}`} className="btn btn-dark">Ver más</Link>
      </div>
    </div>
  );
};

export default Item;
