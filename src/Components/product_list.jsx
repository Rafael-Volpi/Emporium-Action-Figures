import React from 'react';
import styled from 'styled-components';


const Photo = styled.img`
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    margin: auto;
    &:hover {
        cursor: pointer;
        transform: scale(1.01);
      }
`

const Name = styled.h1`
    text-align: center;
    margin: 0;
    font-size: 1.5rem;
`;

const Container = styled.div`
    width: 15rem;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35);
    margin: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
`

const Description = styled.p`
    text-align: center;
    font-size: 0.7rem;
    margin: 0;
`

const Price = styled.p`
    text-align: center;
    font-size: 1rem;
    margin: 0;
`

const Button = styled.button`
    font-family: 'Bungee Tint', sans-serif;
    background-color: snow-white;
    font-size: 1.7rem;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
        transform: scale(1.03);
        background-color: grey;
      }
`

function ProductList({image, price, name, description}){
    return (
        <Container>
            <Photo src={image} alt='usuário'/>
            <Name>{name}</Name>
            <Price>{price}</Price>
            <Description>{description}</Description>
            <Button>Comprar</Button>
        </Container>
    )
}



export default ProductList;
