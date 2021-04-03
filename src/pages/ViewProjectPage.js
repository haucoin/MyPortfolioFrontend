import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectDetails from '../components/ProjectDetails';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * View Project Page
 * @Summary This page holds the components that are shown when a user presses on a specific project
 */
export default function ViewProjectPage() {
  
  return (
    <React.Fragment>
      <Navbar />
      <ProjectDetails />
      <Footer />

    </React.Fragment>
  );
}