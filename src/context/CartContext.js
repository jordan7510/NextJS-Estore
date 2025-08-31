"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    // Load cart from localStorage on first render
    useEffect(() => {
        const savedCart = localStorage.getItem("cartItems")
        if (savedCart) {
            setCartItems(JSON.parse(savedCart))
        }
    }, [])
    //Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (q, product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id)
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: q } : item)
            }
            return [...prev, { ...product, quantity: q }]
        }
        )
    }

    const removeFromCart = (id) => {
        const existing = cartItems.find(item => item.id === id);
        if (existing) {
            const newCartItems = cartItems.filter(item => item.id !== id)
            return setCartItems(newCartItems)
        }
    }

    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const cartValue = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

    return (
        <CartContext.Provider
            value={{ cartItems, setCartItems, totalQuantity, addToCart, removeFromCart, cartValue }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)