import "./item.css"

function Item({ nombre, precio, descripcion, img, children }) {
  return (
    <article className="item">
      <img src={img} alt={`imagen de ${nombre}`} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>${precio}</p>
      {children}
    </article>
  );
}

export default Item