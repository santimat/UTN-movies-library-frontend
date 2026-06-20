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
        styles: {
          title: 'text-lg! normal-case!',
          description: 'font-bold! text-white! text-pretty!',
        },
      }}
    />
  </BrowserRouter>
);
