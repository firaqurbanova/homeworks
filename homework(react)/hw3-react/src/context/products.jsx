import React, { useState, useEffect, createContext } from 'react';

export const productsContext = createContext();

export const ProductsContextProvider = ({ children }) => {

    const [products, setProducts] = useState({ products: [] });




    const getProducts = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setProducts(products=> ({
            ...data,
            products: [...products.products, ...data.products]
        }));
    }

    useEffect(() => {
        getProducts('./products.json');
    }, [])

    


    return (
        <productsContext.Provider value={products}>
            {children}
        </productsContext.Provider>
    )
}
