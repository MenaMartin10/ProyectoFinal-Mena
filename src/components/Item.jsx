    import React from 'react';

    const Item = ({ prod }) => {
    return (
        <div className="card m-2" style={{ width: '18rem' }}>
        <img src={prod.image} className="card-img-top" alt={prod.title} />
        <div className="card-body">
            <h5 className="card-title">{prod.title}</h5>
            <p className="card-text">${prod.price}</p>
            <a href={`/item/${prod.id}`} className="btn btn-vermas">Ver más</a>
        </div>
        </div>
    );
    };

    export default Item;
