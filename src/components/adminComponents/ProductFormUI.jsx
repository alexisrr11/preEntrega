export const ProductFormUI = ({
  product,
  loading,
  errors,
  onChange,
  onSubmit,
}) => {
  return (
    <section className="product-form-page">
      <form className="product-form" onSubmit={onSubmit}>
        <h2>Agregar nuevo producto</h2>

        {errors.general && <p className="error">{errors.general}</p>}

        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={onChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={onChange}
            min="0"
            required
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={onChange}
            required
          />
          {errors.description && (
            <p className="error">{errors.description}</p>
          )}
        </div>

        <div>
          <label>Imagen URL:</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={onChange}
            placeholder="https://..."
            required
          />
          {errors.image && <p className="error">{errors.image}</p>}
        </div>

        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </form>
    </section>
  );
};