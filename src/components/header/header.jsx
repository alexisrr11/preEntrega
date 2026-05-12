import { Link } from "react-router-dom";
import Nav from "../nav/nav";
import "./header.css";

function Header () {
  return (
    <div className="titulo">
      <Link to={"/"}>
        <h1>Plantxis</h1>
      </Link>
      <Nav/>
    </div>
  )
}

export default Header