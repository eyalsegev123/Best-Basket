import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Basket from './components/Basket';

function App() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    // Check if the product is already in the basket before adding
    if (!basket.some(item => item.id === product.id)) {
      setBasket([...basket, product]);
    }
  };

  const removeFromBasket = (product) => {
    setBasket(basket.filter((item) => item.id !== product.id));
  };
  
  return (
    <div className="App">
      <Header />
      <main>
        <section id="products">
          <ProductGrid addToBasket={addToBasket} basket={basket} /> {/* Pass basket to ProductGrid */}
        </section>
        <section id="basket">
          <Basket basket={basket} removeFromBasket={removeFromBasket} /> {/* Show the basket */}
        </section>
      </main>
    </div>
  );
}

export default App;
