import { Link } from "react-router-dom"
import "./nav.css"

function Nav () {
  return (
        <ul className="enlaces">
          <Link to={"/"}>
            <li>Inicio</li>
          </Link>
          <Link to={"/carrito"}>
            <li>Carrito</li>
          </Link>
        </ul>
  )
}

export default Nav