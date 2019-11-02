import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PoetryPage from './components/PoetryPage.js';
import ProjectsPage from './components/ProjectsPage.js';
import ContactPage from './components/ContactPage.js';

const App = () => (
  <Router>
    <div className="header">
      <div className="center-column">
        <h1>Jan Tabaczynski</h1>
        <nav>
          <h2>
            <Link to="/poetry">poetry</Link>
            <span> * </span>
            <Link to="/projects">projects</Link>
            <span> * </span>
            <Link to="/contact">contact</Link>
          </h2>
        </nav>
      </div>
    </div>
    <Switch>
      <Route path="/poetry">
        <PoetryPage />
      </Route>
      <Route path="/projects">
        <ProjectsPage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
      <Route path="/">
        <PoetryPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
