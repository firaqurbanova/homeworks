import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = { cartProducts: [] };

function cartReducer(state, { type, payload }) {
    switch (type) {
        case 'add_to_cart':
            return { cartProducts: [...state.cartProducts, payload] }
        case 'remove_from_cart':
            return { cartProducts: state.cartProducts.filter(p => p.uniqLocalId !== payload) }
        default:
            return state
    }
}

export const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = product => {
        dispatch({
            type: 'add_to_cart',
            payload: { ...product, uniqLocalId: Date.now() }
        })
    }

    const removeFromCart = uniqLocalId => {
        dispatch({
            type: 'remove_from_cart',
            payload: uniqLocalId
        })
    }

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
} 
