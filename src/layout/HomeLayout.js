import React from 'react';

// COMPONENTS
import Header from '../components/Header.react';
import Footer from '../components/Footer.react';

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
