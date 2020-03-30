import React, { useContext } from 'react';
import { Layout } from '../../commons';
import styled from 'styled-components';


import { CartContext } from '../../context/cart'

export const Cart = () => {

    const { cartProducts, removeFromCart } = useContext(CartContext);

    return (
        <Layout>
           
            <h1>Cart</h1>

            {cartProducts.map(({ id, name, price, image, uniqLocalId }) => (
                <div key={uniqLocalId}>
                    <img style={mystyle} src={image} alt={name} />
                    <h5>{name} => {price}</h5>
                    <Button onClick={() => removeFromCart(uniqLocalId)}>delete</Button>
                </div>
            ))}

        </Layout>
    )
}

const mystyle={
    width: "200px",
    height: "200px"
}


const Button = styled.button`
  background-color: #e9cfff;
  padding: 5px 15px;
  border-radius: 4px;
  color: black;
  border:1px solid grey;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 10px;
`;