import React, { useContext } from 'react';
import { Layout } from '../../commons';
import styled from 'styled-components';
import { FavContext } from '../../context/favourites'

export const Favourites = () => {

    const { favProducts, removeFromFav } = useContext(FavContext);

    return (
        <Layout>
            <h1>Favourites</h1>
            {favProducts.map(({ id, name, price, image, uniqLocalId }) => (
                <div key={uniqLocalId}>
                    <img style={mystyle} src={image} alt={name} />
                    <h5>{name} --- {price}</h5>
                    <Button onClick={() => removeFromFav(uniqLocalId)}>delete</Button>
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
