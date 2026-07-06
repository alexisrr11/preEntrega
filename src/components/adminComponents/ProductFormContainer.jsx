import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const ProductFormContainer = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState();
    const [ errors, setErrors] = useState({})
    const [file, setFile] = useState();
    const [product, setProduct] = useState(
        {name: "",
        price: "",
        description: "",
    });

    const handleChange = (e) => {
        const [name, value] = e.target;
        setProduct({...product, [name]: value})
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0] || null;
        setFile(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        setLoading(true);

        const newErrors = validateProducts({...product, file});
        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
            loading(false);
            return
        }
        try {
            const imgUrl = await aploadFile(file);
            const products = [
                ...product,
                price = Number(product.price),
                image = imgUrl,
            ]
            const id = await createProduct(productData);
            setProduct({name: "", price: "", description:""});
            setFile(null);
            navigate(`success/${id}`, {replace: true})
        } catch (error) {
            setErrors({general: error.message})
        } finally {
            setLoading(false)
        }
    }

    return (
        <ProductFormUI
        product={product}
        loading={loading}
        onChange={handleChange}
        onFiliChange={handleFileChange}
        onSubmit={handleSubmit}
        />
    )
}