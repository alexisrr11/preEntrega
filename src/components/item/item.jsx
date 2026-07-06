import "./item.css";

function Item({ name, price, description, image, children }) {
  return (
    <article className="item">
      <img src={image} alt={`imagen de ${name}`} />
      <h3>{name}</h3>
      <h4>{description}</h4>
      <p>${price}</p>
      {children}
    </article>
  );
}

export default Item;