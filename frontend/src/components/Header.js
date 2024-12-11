import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Best Basket</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/basket">My Basket</a></li>
          <li><a href="/order">Order</a></li> {/* Add the link to OrderPage */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
