import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import { productsContext } from '../../../context/products';
import { CartContext } from '../../../context/cart';



export const SingleProduct = ({ history: { push }, match: { params: { id } } }) => {

    const products = useContext(productsContext);
    const { addToCart } = useContext(CartContext);
    

    const product = products.products.find(item => item.id == id);


    return (
        <Container>
            {product && (
                <Popup>
                    Are you sure?
                    <Close onClick={() => push('/products')}>X</Close>
                    <Image border={product.color} src={product.image}  />
                    
                    <h1>{product.name}</h1>
                    <h2>{product.price}</h2>
                    
                <Buttons>
                    <Button onClick={() => addToCart(product)}>Add</Button>
                    <Button onClick={() => push('/products')}>Cancel</Button>

                </Buttons>
                </Popup>
            )}
        </Container>
    )
};

const Container = styled.div`
    position: fixed;
    background: rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const Popup = styled.div`
    width: 96%;
    padding: 40px;
    text-align: center;
    max-width: 600px;
    color: black;
    border-radius: 15px;
    background: white;
    position: relative;
    font-size:20px;
`

const Image = styled.img`
    display: block;
    margin: 0 auto;
    width: 100px; 
    height: 100px; 
    object-fit: cover;
    margin-top:15px;
    

    ${p => p.border && css`
        border: 2px solid ${p.border}
    `}
`

const Close = styled.button`
    display: block;
    width: 30px;
    height: 30px;
    background: red;
    color: white;
    border: none;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor:pointer;
`

const Buttons = styled.div`
    display:flex;
    
    justify-content: space-around;

`
const Button =styled.button`
    display:block;
    width:55px;
    height:30px;
    justify-content: space-between;
    cursor:pointer;
    `
