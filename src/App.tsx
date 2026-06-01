import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Home = lazy(() =>
  import('@/pages/Home').then((module) => ({ default: module.Home }))
);
const Test = lazy(() =>
  import('@/pages/Test').then((module) => ({ default: module.Test }))
);
const Auth = lazy(() =>
  import('@/pages/Auth').then((module) => ({ default: module.Auth }))
);

function App() {
  return (
    <>
      <Header />
      <main className="my-10 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
