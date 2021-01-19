import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import GlobalStyles from '../globalStyles';
import Home from '../pages/Home';

const Router = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  );
};

export default Router;
