import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/itemDetail";
import "./itemDetailContainer.css";

function ItemDetailContainer() {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/products.json")
      .then(res => res.json())
      .then(data => {
        const item = data.find(e => String(e.id) === id)
        if(item){
            setItemDetail(item)
            return
        }throw new Error("Elemento no encontrado");
      })
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
