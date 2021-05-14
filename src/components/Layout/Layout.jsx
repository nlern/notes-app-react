import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {
  return (
    <div className='h-full flex flex-col'>
      <Header />
      <div className='container flex-1 mx-auto mt-16 p-4'>{children}</div>
      <Footer />
    </div>
  );
}
