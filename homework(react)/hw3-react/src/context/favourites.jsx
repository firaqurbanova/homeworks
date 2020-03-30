import React, { createContext, useReducer } from 'react';

export const FavContext = createContext();

const initialState = { favProducts: [] };

function favReducer(state, { type, payload }) {
    switch (type) {
        case 'add_to_fav':
            return { favProducts: [...state.favProducts, payload] }
        case 'remove_from_fav':
            return { favProducts: state.favProducts.filter(p => p.uniqLocalId !== payload) }
        default:
            return state
    }
}

export const FavContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(favReducer, initialState);

    const addToFav = product => {
        dispatch({
            type: 'add_to_fav',
            payload: { ...product, uniqLocalId: Date.now() }
        })
    }

    const removeFromFav = uniqLocalId => {
        dispatch({
            type: 'remove_from_fav',
            payload: uniqLocalId
        })
    }

    return (
        <FavContext.Provider value={{ ...state, addToFav, removeFromFav }}>
            {children}
        </FavContext.Provider>
    )
} 
