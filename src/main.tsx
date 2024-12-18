import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { NumberProvider } from './store/numberContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NumberProvider>
      <App />
    </NumberProvider>
  </StrictMode>
);
