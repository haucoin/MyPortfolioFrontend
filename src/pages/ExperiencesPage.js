import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Experiences from '../components/ExperienceInformation';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Experiences Page
 * @Summary This page holds the components that are shown when a user presses the experiences page
 */
export default function ExperiencesPage() {
  
  return (
    <React.Fragment>
      <Navbar />
        <Experiences />
      <Footer />

    </React.Fragment>
  );
}