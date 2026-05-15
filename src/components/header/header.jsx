import { Link } from "react-router-dom";
import Nav from "../nav/nav";
import logo from '../../assets/logo.jpg'
import "./header.css";

function Header () {
  return (
    <div className="titulo">
      <Link to={"/"}>
        <div>
          <img src={logo} alt={`Nombre del ${logo}`} />
          <h1>Plantxis</h1>
        </div>
      </Link>
      <Nav/>
    </div>
  )
}

export default Header