import { Link, Navigate } from "react-router-dom";
import { UseAuth } from "../../../context/AuthContext";
import "./Dashboard.css";

export const Dashboard = () => {
    const { Loguot } = UseAuth();
    return (
        <div className="">
            <header className="">
                <h2>Panel de Administración</h2>
                <div className="">
                    <Link className="" to="/">
                        Volver a la tienda
                    </Link>
                    <button>Cerrar Sesión</button>
                </div>
            </header>
            <section>
                <h3>Acciones Rapidas</h3>
                <div className="action-grid">
                    <Link to="/admin/products/new" className="action-card">
                        ➕ Cargar
                    </Link>

                    <Link to="#">
                        ✏️ Modificar
                    </Link>

                    <Link to="#">
                        Eliminar
                    </Link>
                </div>
            </section>
            <section>
                <h3>Ayuda</h3>
                <p>
                    Desde el panel podes acceder a la tienda
                </p>
            </section>
        </div>
    )
}


