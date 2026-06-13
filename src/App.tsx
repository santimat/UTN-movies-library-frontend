import { lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router';
import { GuardRoute } from '@/routes/GuardRoute';
import { Layout } from '@/shared/components/layout/Layout';

const Logout = lazy(() =>
  import('@/routes/Logout').then((module) => ({
    default: module.Logout,
  }))
);
const AdminRoute = lazy(() =>
  import('@/routes/AdminRoute').then((module) => ({
    default: module.AdminRoute,
  }))
);

const Home = lazy(() =>
  import('@/pages/Home').then((module) => ({ default: module.Home }))
);
const MovieDetail = lazy(() =>
  import('@/pages/Movie').then((module) => ({
    default: module.Movie,
  }))
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
const NotFound = lazy(() =>
  import('@/pages/NotFound').then((module) => ({
    default: module.NotFound,
  }))
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GuardRoute />}>
          <Route
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route index element={<Home />} />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="test" element={<Test />} />
            <Route path="auth" element={<Auth />} />
            <Route element={<AdminRoute />}>
              <Route path="admin" element={<Admin />} />
            </Route>
            <Route path="logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
