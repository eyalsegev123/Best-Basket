import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Best Basket</h1>
      <nav>
        <ul>
          <li><a href="#products">Products</a></li>
          <li><a href="#basket">My Basket</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
