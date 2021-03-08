import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Projects from '../components/ProjectsTabular';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Projects Page
 * @Summary This page holds the components that are shown when a user presses the projects page
 */
export default function ProjectsPage() {
  
  return (
    <React.Fragment>

      <Navbar />
        <Projects />
      <Footer />

    </React.Fragment>
  );
}