import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';  // Assuming you're using a .jsx file instead of .tsx
import './index.css';

// Render the app inside the element with id "root"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
