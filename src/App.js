import About from './About.js';
import FbInternship from './FbInternship.js';
import Airbnb from './Airbnb.js';
import Nickelodeon from './Nickelodeon.js';
import Home from './Home.js';
import Work from './Work.js';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';


function App() {
  // const backgroundFontSize = useScrollChange();
  return (
    <Router>
    <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/fb">
            <FbInternship/>
          </Route>
          <Route exact path="/airbnb">
            <Airbnb/>
          </Route>
          <Route exact path="/nickelodeon">
            <Nickelodeon/>
          </Route>
          <Route exact path="/work">
            <Work/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
