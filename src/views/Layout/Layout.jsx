import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarMenu from '../../components/NavbarMenu';
import Footer from '../../components/Footer';

const Layout = () => {
  return (
    <div className='mx-auto flex flex-col min-h-screen max-w-screen-2xl bg-black text-white'>
      <NavbarMenu/>
      <main className=' flex-1'>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
