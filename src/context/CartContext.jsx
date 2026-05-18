import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
    return context;
};

export function CartProvider({ children }) {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    const isInCart = (item) => {
        return cart.some(el => el.id === item.id);
    };

    const addItem = (item) => {
        if (isInCart(item)) {
            alert("El producto ya está en el carrito");
            return;
        }
        setCart([...cart, item]);
        alert("¡Producto agregado al carrito!");
    };

    const removeItem = (id) => {
        setCart(cart.filter(el => el.id !== id));
    };

    const clearCart = () => setCart([]);

    const getTotalItem = () => cart.length;

    const getCartTotal = () =>
        cart.reduce((acc, el) => acc + el.price, 0);

    const checkOut = () => {
        alert("Compra realizada");
        clearCart();
        navigate("/");
    };

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clearCart,
            getTotalItem,
            getCartTotal,
            checkOut
        }}>
            {children}
        </CartContext.Provider>
    );
};