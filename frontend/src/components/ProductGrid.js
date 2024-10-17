import React from 'react';
import './ProductGrid.css';

const products = [
    { id: 1, name: 'Apple', logo: '/path-to-logo/apple-logo.png', price: 5 },
    { id: 2, name: 'Banana', logo: '/path-to-logo/banana-logo.png', price: 3 },
    // More products...
  ];
  

const ProductGrid = ({ addToBasket, basket }) => {
    return (
      <section className="product-grid">
        {products.map((product) => (
            <div key={product.id} className="product-card">
                <img src={product.logo} alt={`${product.name} logo`} className="product-logo" />
                <h3>{product.name}</h3>
                <p>Price: {product.price}₪</p> {/* Show price here */}
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
