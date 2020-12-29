import React, {useEffect} from 'react';
import WorkCard from './components/WorkCard.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './Work.css';
import Footer from './Footer.js';
import background from './assets/fb.png';


function Work() {
  return (
      <>
    <div>
        <div className="nav-bar-wrapper">
      <Link to="/" className="nav-link-home">Bianca Lee</Link>
      <div className="nav-bar-container">
          <Link to="/about" className="nav-bar-link">About</Link>
        <Link to="/work" className="nav-bar-link">Work</Link>
        </div>
      </div>
      <div className="work-header-wrapper">
          <div className="work-header">
            Other things I've worked on
          </div>
      </div>
      <div className="work-card-container">
          <WorkCard image={background} link="/airbnb" title="Airbnb Trips" description="Airbnb x Adobe Creative Jam"/>
          <WorkCard image={background} link="/nickelodeon" title="Nickelodeon Multiverse" description="Nickelodeon x Adobe Creative Jam"/>
          <WorkCard image={background} link="https://github.com/codebase-berkeley/teacher-portal" title="Ygnacio Valley Teacher Portal" description="Web App"/>
          <WorkCard image={background} link="https://github.com/leebianca/vector-visual" title="Vector Addition Visualization" description="Web App"/>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default Work;
