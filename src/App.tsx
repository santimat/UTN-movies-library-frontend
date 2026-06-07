import { lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router';
import { AdminRoute } from '@/routes/AdminRoute';
import { GuardRoute } from '@/routes/GuardRoute';
import { Layout } from '@/shared/components/layout/Layout';

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
            <Route path="test" element={<Test />} />
            <Route path="auth" element={<Auth />} />
            <Route element={<AdminRoute />}>
              <Route path="admin" element={<Admin />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
