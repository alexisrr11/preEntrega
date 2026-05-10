import { Link } from "react-router-dom"
import Item from "../item/item"
import "./itemList.css"

function ItemList ({products}) {
    if(products.length === 0){
        return <p>No hay productos</p>
    }
  return (
    <div className="products-container">
        { products.map((product) => (
            <Link to= {`/product/${product.id}`} key={product.id}>
                <Item {...product} />
            </Link>
        ))}
    </div>
  )
}

export default ItemList