import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EducationInformation from '../components/EducationInformation';
import EducationSkills from '../components/EducationSkills';
import EducationCourses from '../components/EducationCourses';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Education Page
 * @Summary This page holds the components that are shown when a user presses the education page
 */
export default function EducationPage() {
  
  return (
    <React.Fragment>
      
      <Navbar />
      <EducationInformation />
      <EducationSkills />
      <EducationCourses />
      <Footer />

    </React.Fragment>
  );
}