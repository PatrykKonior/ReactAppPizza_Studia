import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

// Tworzenie kontekstu
const CartContext = createContext();

// Hook do korzystania z kontekstu
export const useCart = () => useContext(CartContext);

// Provider do zarz¹dzania koszykiem
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    // Dodaj produkt do koszyka
    const addToCart = (item) => {
        setCart((prevCart) => ({
            ...prevCart,
            [item.nazwa]: {
                ...item,
                quantity: (prevCart[item.nazwa]?.quantity || 0) + 1,
            },
        }));
    };

    // Usuñ produkt z koszyka
    const removeFromCart = (itemName) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[itemName]?.quantity > 1) {
                updatedCart[itemName].quantity -= 1;
            } else {
                delete updatedCart[itemName];
            }
            return updatedCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Dodanie PropTypes dla walidacji children
CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
