import { Link } from "react-router-dom"
import "./nav.css"
import { useCart } from "../../context/CartContext"


function Nav () {
  const { getTotalItem } = useCart();
  const totalItem = getTotalItem(); 
  return (
        <ul className="enlaces">
          <Link to={"/"}>
            <li>Inicio</li>
          </Link>
          <Link to={"/carrito"}>
            <li>
              Carrito
              {totalItem > 0 && <span className="incart">{totalItem}</span>}
            </li>
          </Link>
        </ul>
  )
}

export default Nav