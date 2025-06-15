import Item from './Item';

const ItemList = ({ productos }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {productos.map(prod => <Item key={prod.id} prod={prod} />)}
    </div>
  );
};

export default ItemList;