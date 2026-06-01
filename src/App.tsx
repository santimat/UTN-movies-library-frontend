import { Routes, Route } from 'react-router';
import { Home } from '@/pages/Home';
import { Test } from '@/pages/Test';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Login } from '@/pages/Login';

function App() {
  return (
    <>
      <Header />
      <main className="my-10 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
