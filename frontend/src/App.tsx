import { Header } from '@/components/layout/Header';
import { Routes, Route } from 'react-router';
import { Home } from '@/pages/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
