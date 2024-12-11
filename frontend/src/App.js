import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductGrid from './components/ProductGrid';
import Basket from './components/Basket';
import OrderPage from './pages/OrderPage'; // Import the OrderPage component

function App() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    if (!basket.some(item => item.id === product.id)) {
      setBasket([...basket, product]);
    }
  };

  const removeFromBasket = (product) => {
    setBasket(basket.filter((item) => item.id !== product.id));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/products">
              <ProductGrid addToBasket={addToBasket} basket={basket} />
            </Route>
            <Route path="/basket">
              <Basket basket={basket} removeFromBasket={removeFromBasket} />
            </Route>
            <Route path="/order" component={OrderPage} /> {/* Add the route for OrderPage */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
