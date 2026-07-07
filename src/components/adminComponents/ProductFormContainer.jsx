import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createProduct } from "../../service/ProductService";
import { ProductFormUI } from "./ProductFormUI";

export const ProductFormContainer = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const validateProduct = () => {
    const newErrors = {};

    if (!product.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    }

    if (!product.price) {
      newErrors.price = "El precio es obligatorio";
    }

    if (Number(product.price) <= 0) {
      newErrors.price = "El precio debe ser mayor a 0";
    }

    if (!product.description.trim()) {
      newErrors.description = "La descripción es obligatoria";
    }

    if (!product.image.trim()) {
      newErrors.image = "La imagen es obligatoria";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});

    const newErrors = validateProduct();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);

      const productData = {
        name: product.name,
        price: Number(product.price),
        description: product.description,
        image: product.image,
      };

      const id = await createProduct(productData);

      setProduct({
        name: "",
        price: "",
        description: "",
        image: "",
      });

      navigate(`/admin/products/success/${id}`, { replace: true });
    } catch (error) {
      console.error("Error al cargar producto:", error);

      setErrors({
        general: "Error al cargar producto",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      product={product}
      loading={loading}
      errors={errors}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};