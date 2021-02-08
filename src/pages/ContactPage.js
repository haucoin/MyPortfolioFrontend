import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/ContactForm';
import Footer from '../components/Footer';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Contact Page
 * @Summary This page holds the components that are shown when a user presses the contact page
 */
export default function ContactPage() {
  
  return (
    <React.Fragment>
      
      <Navbar />
      <Form />
      <Footer />

    </React.Fragment>
  );
}