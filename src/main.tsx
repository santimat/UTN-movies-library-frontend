import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Toaster } from 'sonner';
import App from '@/App.tsx';
import '@/css/global.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
    <Toaster
      visibleToasts={1}
      position="top-right"
      className="font-body text-xl font-bold"
      toastOptions={{
        classNames: {
          error: '!bg-secondary !text-white',
          success: '!bg-tertiary !text-white',
        },
      }}
    />
  </BrowserRouter>
);
