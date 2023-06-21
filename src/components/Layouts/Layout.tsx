import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-stretch">
      <div className="min-h-screen">
        <Header />
        <main className="min-h-[calc(100vh-80px)]">{children ? children : <Outlet />}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
