import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PorfolioProject from '../components/PortfolioProject';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Portfolio Page
 * @Summary This page holds the components that are shown when a user presses on the portfolio project
 */
export default function PortfolioPage() {
  
  return (
    <React.Fragment>
      <Navbar />
      <PorfolioProject />
      <Footer />

    </React.Fragment>
  );
}