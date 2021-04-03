import React from 'react';
import Navbar from '../components/Navbar';
import ContactSubmission from '../components/ContactSubmission';
import Footer from '../components/Footer';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Confirmation Page
 * @Summary This page holds the components that are shown when a user presses submits a contact form
 */
export default function ContactPage() {
  
  return (
    <React.Fragment>
      <Navbar />
      <ContactSubmission />
      <Footer />

    </React.Fragment>
  );
}