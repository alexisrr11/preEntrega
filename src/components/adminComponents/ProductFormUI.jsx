export const ProductFormUI = () => {
    return (
        <>
            <form className="product-form" onSubmit={onSubmit}>
                <h2>Agregar nuevo Producto</h2>
                <div>
                    <label htmlFor="">Nombre:</label>
                    <textarea 
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={onChange}
                    required
                    />
                    {error.description && <p className="error">{error.description}</p>}
                </div>

                <div>
                    <label htmlFor="">Precio:</label>
                    <textarea 
                    type="text"
                    name="price"
                    value={product.name}
                    onChange={onChange}
                    min="0"
                    />
                    {error.description && <p className="error">{error.description}</p>}
                </div>

                <div>
                    <label htmlFor="">Descripción:</label>
                    <textarea 
                    name="description"
                    value={product.description}
                    onChange={onChange}
                    required
                    />
                    {error.description && <p className="error">{error.description}</p>}
                </div>

                <div>
                    <label htmlFor="">Imagen:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={onFileChange}
                        required
                    />
                    {error.file && <p className="error">{error.description}</p>}
                </div>
                <button className="btn" type="submit" disabled={loading}>
                    {loading ? "Guardando..." : "Guardar"}
                </button>
            </form>
        </>
    )
}