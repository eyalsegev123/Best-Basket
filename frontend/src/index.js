import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/App.css';
import App from './App';

// Add debugging
console.log('Starting React app initialization...');

const container = document.getElementById('root');
if (!container) {
  console.error('Root element not found!');
  throw new Error('Failed to find the root element');
}

const root = createRoot(container);

try {
  console.log('Attempting to render App component...');
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('App component rendered successfully');
} catch (error) {
  console.error('Failed to render App:', error);
}
