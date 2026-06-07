import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PrivateRoute } from '@/routes/PrivateRoute';
import { PublicRoute } from '@/routes/PublicRoute';

const Home = lazy(() =>
  import('@/pages/Home').then((module) => ({ default: module.Home }))
);
const Test = lazy(() =>
  import('@/pages/Test').then((module) => ({ default: module.Test }))
);
const Auth = lazy(() =>
  import('@/pages/Auth').then((module) => ({ default: module.Auth }))
);
const Admin = lazy(() =>
  import('@/pages/Admin').then((module) => ({ default: module.Admin }))
);

function App() {
  return (
    <>
      <Header />
      <main className="relative my-6 flex-1">
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/test" element={<Test />} />
          </Route>
          <Route
            element={
              <PrivateRoute
                requireAuth={true}
                requireAdmin={true}
                navigateTo="/auth"
              />
            }
          >
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
