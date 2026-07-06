import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from '../../service/ProductService'
import ItemDetail from "../itemDetail/itemDetail";
import "./itemDetailContainer.css";

function ItemDetailContainer() {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      getProductById(id)
      .then((data) => setItemDetail(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, []);

  if (loading) return <p>... Cargando</p>;
  if(!itemDetail) return <p>Producto no encontrado</p>

  return (
    <div className="detail">
      <h1>Detalles del Producto</h1>
      <ItemDetail item={itemDetail} />
    </div>
  );
}

export default ItemDetailContainer;