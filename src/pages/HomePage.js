import React from 'react';

import Navbar from '../components/Navbar';
import HeroBanner from '../components/BackgroundVideo';
import Footer from '../components/Footer';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Home Page
 * @Summary This page holds the components that are shown when a user presses the home page
 */
export default function HomePage() {
  
  return (
    <React.Fragment>

      <Navbar />
      <HeroBanner />
      <Footer />

    </React.Fragment>
  );
}

