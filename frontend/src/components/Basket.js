import React from 'react';
import './Basket.css';

const Basket = ({ basket, removeFromBasket }) => {
    const totalPrice = basket.reduce((sum, product) => sum + product.price, 0);
  
    return (
      <div className="basket-summary">
        <h2>My Basket</h2>
        {basket.length === 0 ? (
          <p>Your basket is empty.</p>
        ) : (
          <div>
            <ul>
              {basket.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price}₪ {/* Display price here */}
                  <button onClick={() => removeFromBasket(item)}>Remove</button>
                </li>
              ))}
            </ul>
            <h3>Total Price: {totalPrice}₪</h3> {/* Show total price */}
          </div>
        )}
      </div>
    );
  };
  

export default Basket;
