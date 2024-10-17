import React from 'react';
import './ProductGrid.css'; // Importing the CSS file

const products = [
    {
      id: 1,
      name: 'Apple',
      price: 1.2,
      logo: require('../assets/fruits/apple.png'), // Adjusted path
    },
    {
      id: 2,
      name: 'Banana',
      price: 0.8,
      logo: require('../assets/fruits/banana.png'), // Adjusted path
    },
  ];
  

const ProductGrid = ({ addToBasket, basket }) => {
    return (
      <section className="product-grid">
        {products.map((product) => (
            <div key={product.id} className="product-card">
                <img src={product.logo} alt={`${product.name} logo`} className="product-logo" />
                <h3>{product.name}</h3>
                <p>Price: {product.price}₪</p>
                <button 
                    onClick={() => addToBasket(product)} 
                    disabled={basket.some(item => item.id === product.id)}
                >
                    {basket.some(item => item.id === product.id) ? 'Added' : 'Add to Basket'}
                </button>
            </div>
        ))}
      </section>
    );
};

export default ProductGrid;
