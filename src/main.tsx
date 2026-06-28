import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Toaster } from 'sileo';
import App from '@/App.tsx';
import '@/global.css';
// import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
    <Toaster
      position="top-center"
      options={{
        fill: 'black',
        duration: 3000,
        styles: {
          title: 'text-lg! normal-case! font-bold!',
          description: 'font-semibold! text-white! text-pretty! font-body!',
          badge: 'z-70!',
          button: 'font-semibold!',
        },
      }}
    />
  </BrowserRouter>
);
