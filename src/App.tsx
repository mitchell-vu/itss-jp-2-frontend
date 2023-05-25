import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { HomePage, LoginPage } from './pages';

const App = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="" element={<HomePage />} />

        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<LoginPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
