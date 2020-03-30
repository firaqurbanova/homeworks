import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { CartContext } from '../context/cart';
import { FavContext } from '../context/favourites';

export const Header = () => {

    const { cartProducts } = useContext(CartContext);
    const { favProducts } = useContext(FavContext);

    return (
        <Container>
            <StyledNavLink to="/products">Products</StyledNavLink>
            <StyledNavLink to="/cart">Cart({cartProducts.length})</StyledNavLink>
            <StyledNavLink to="/favourites">Favourites({favProducts.length})</StyledNavLink>


        </Container>
    )
}

const Container = styled.header`
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
`

const StyledNavLink = styled(NavLink)`
    width: 48%;
    border: 1px solid lightgrey;
    padding: 10px;
    border-radius: 10px;
    color: grey;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 14px;
    transition: all .3s ease;
    margin:10px;

    &.active {
        border-color: black;
        color: black;
        background-color: #e9cfff;
    }
`
