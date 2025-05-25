const ItemListContainer = ({ greeting }) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <h2 className="text-center">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;