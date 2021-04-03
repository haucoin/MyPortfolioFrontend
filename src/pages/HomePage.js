import React from 'react';

import Navbar from '../components/Navbar';
import HeroBanner from '../components/BackgroundVideo';
import IntroductionBiography from '../components/IntroductionBiography';
import IntroductionSkills from '../components/IntroductionSkills';
import IntroductionProjects from '../components/IntroductionProjects';
import IntroductionExperience from '../components/IntroductionExperience';
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
      <IntroductionBiography />
      <IntroductionSkills />
      <IntroductionProjects />
      <IntroductionExperience />
      <Footer />

    </React.Fragment>
  );
}

