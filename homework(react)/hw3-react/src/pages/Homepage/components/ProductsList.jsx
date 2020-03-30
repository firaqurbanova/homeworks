import React, { useContext } from 'react';
import styled from 'styled-components';

import { productsContext } from '../../../context/products';


import { SingleProductListItem } from './SingleProductListItem';

export const ProductsList = () => {
    const products = useContext(productsContext);
    

    return (
        <List>
            {products.products.map(item => (
                <SingleProductListItem
                    
                    key={item.id}
                    {...item}
                />
            ))}

        </List>
    )
}

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px -10px;
    
`
