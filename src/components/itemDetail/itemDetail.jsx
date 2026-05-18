import { useCart } from "../../context/CartContext"
import Item from "../item/item"

function ItemDetail ({item}) {
  const { addItem } = useCart();
  return (
        <Item {...item}>
          <button className="btn-primary" onClick={() => addItem(item)}>
            Agregar al carrito
          </button>
        </ Item>
  );
};

export default ItemDetail