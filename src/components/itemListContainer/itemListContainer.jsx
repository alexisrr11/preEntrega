import "./itemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../itemList/itemList";

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data/products.json")
        .then(res => res.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error(error))
        .finally(() => {
            setLoading(false)
        })
    }, []);

    if(loading) return <p>...Cargando</p>;
    return (
        <>
            <section>
                <ItemList products={products} />
            </section>
        </>
    )
}

export default ItemListContainer