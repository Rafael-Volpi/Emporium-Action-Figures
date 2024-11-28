import React from 'react';


// ProfileCard Component
const ProfileCard = ({ image, name, description }) => {
    return (
        <div className="profile-card">
            <img src={image} alt="usuário" />
            <h3>{name}</h3>
            <p>{description}</p>
            <button>Seguir</button>
        </div>
    );
};

// ProductList Component
const products = [
    {
        id: 1,
        name: 'Produto 1',
        price: 'R$ 10,00',
        image: 'https://via.placeholder.com/150',
        description: 'Descrição do Produto 1'
    },
    {
        id: 2,
        name: 'Produto 2',
        price: 'R$ 20,00',
        image: 'https://via.placeholder.com/150',
        description: 'Descrição do Produto 2'
    },
    {
        id: 3,
        name: 'Produto 3',
        price: 'R$ 30,00',
        image: 'https://via.placeholder.com/150',
        description: 'Descrição do Produto 3'
    },
];

const ProductList = () => {
    return (
        <div>
            <h2>Lista de Produtos</h2>
            <div className="product-list">
                {products.map(product => (
                    <ProfileCard
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        description={product.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
