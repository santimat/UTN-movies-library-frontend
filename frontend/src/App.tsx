import { Routes, Route } from 'react-router';
import { Home } from '@/pages/Home';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="my-10 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
