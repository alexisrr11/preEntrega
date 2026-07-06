import { useEffect } from "react";
import { replace, useNavigate, useParams } from 'react-router-dom';

export const ProductSuccess = () => {
    const {id} = useParams();
    const navigate =  useNavigate();
    
    return (
        <section>
            <div className="seccess-page">✅</div>
            <h2>Prducto Cargado con Exito</h2>
            <p>ID de Prodcuto</p>
            <p>Puede carga otro haciendo click al boton</p>
            <button
                className="btn bg-primary primary"
                onClick={ navigate("/admin", {replace: true})  }
            >
                Agregar otro Producto
            </button>

        </section>
    )
}
