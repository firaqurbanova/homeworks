import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {productsContext} from '../../../context/products';
import {FavContext} from '../../../context/favourites';

export const SingleProductListItem = ({ image, name, price, id }) => {
    const products=useContext(productsContext);
    const { addToFav} = useContext(FavContext);
    const product= products.products.find(item=>item.id == id);
    return (
        <Card>
            <img alt={name} src={image} />
            <h4>{name}</h4>
            <h3>{price}$</h3>
            <ButtonStar>
            <Button to={`/products/${id}`}>Add to cart</Button>
            <i onClick={()=>addToFav(product)} style={{color: "black"}} className="fas fa-star"></i>
            </ButtonStar>
        </Card>
    )
}

const Card = styled.div`
    width: calc((100% - 100px) / 4);
    margin: 0 10px 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    padding: 15px;
    color: black;
    text-decoration: none;
    display: inline-block;
    flex-wrap: wrap;
    justify-content: space-between;

    img {
        width: 100%;
        height: 150px;
        border-radius: 10px;
        object-fit: contain;
    }
    
 `

 const Button = styled(Link)`
        width: 130px;
        height: 15px;
        display: flex;
        justify-content: space-between;
        margin:15px;
        padding:20px;
        background-color: lightgrey;
        color:black;
        font-size:15;
        text-decoration:none;
        border: 1px solid grey;
        border-radius: 5px;
        text-align: center;
        `

    const ButtonStar =styled(Link)`
        display: flex;
        text-decoration: none;
    `
    