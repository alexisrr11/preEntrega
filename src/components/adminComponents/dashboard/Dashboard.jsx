import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import "./Dashboard.css";

export const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    const confirmed = window.confirm("¿Seguro que querés cerrar sesión?");

    if (!confirmed) return;

    await logout();
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h2>Panel de Administración</h2>
          <p>{user?.email}</p>
        </div>

        <div className="dashboard-actions">
          <Link className="dashboard-link" to="/">
            Volver a la tienda
          </Link>

          <button type="button" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </header>

      <section>
        <h3>Acciones rápidas</h3>

        <div className="action-grid">
          <Link to="/admin/products/new" className="action-card">
            ➕ Cargar producto
          </Link>

          <span className="action-card action-card-disabled">
            ✏️ Modificar productos
          </span>

          <span className="action-card action-card-disabled">
            🗑️ Eliminar productos
          </span>
        </div>
      </section>

      <section>
        <h3>Ayuda</h3>

        <p>Desde este panel podés administrar los productos de la tienda.</p>
      </section>
    </div>
  );
};