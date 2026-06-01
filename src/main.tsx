import { createRoot } from 'react-dom/client';
import App from '@/App.tsx';
import '@/css/global.css';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
