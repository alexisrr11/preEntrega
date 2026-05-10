import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <ul className="footer">
      <Link to="/">
        <li>Inicio</li>
      </Link>
      <Link to="/carrito">
        <li>Carrito</li>
      </Link>
    </ul>
  );
}

export default Footer;