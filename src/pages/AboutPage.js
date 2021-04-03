import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Biography from '../components/Biography';
import Recommendations from '../components/Recommendations';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * About Page
 * @Summary This page holds the components that are shown when a user presses the about page
 */
export default function AboutPage() {
  
  return (
    <React.Fragment>
      <Navbar />
      <Biography />
      <Recommendations />
      <Footer />

    </React.Fragment>
  );
}

