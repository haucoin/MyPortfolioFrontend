import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import ViewProjectPage from './pages/ViewProjectPage.js';
import ExperiencesPage from './pages/ExperiencesPage.js';
import EducationPage from './pages/EducationPage.js';
import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * App
 * @Summary This file contains the routes and navigates to the appropriate page
 */
export default function App() {

  return (
      
      <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/projects">
              <ProjectsPage />
            </Route>
            <Route exact path="/project">
              <ViewProjectPage />
            </Route>
            <Route exact path="/experience">
              <ExperiencesPage />
            </Route>
            <Route exact path="/education">
              <EducationPage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/contact">
              <ContactPage />
            </Route>
          </Switch>
      </Router>
  );
}
