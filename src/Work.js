import React from 'react';
import WorkCard from './components/WorkCard.js';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './Work.css';
import Footer from './Footer.js';
import airbnb from './assets/airbnb.png';
import nick from './assets/nick.png';
import studentportal from './assets/student-portal.png';
import vector from './assets/vector.png';


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
          <WorkCard image={airbnb} link="/airbnb" title="Airbnb Trips" description="Mobile / UX"/>
          <WorkCard image={nick} link="/nickelodeon" title="Nickelodeon Multiverse" description="Mobile / UX"/>
          <WorkCard image={studentportal} extlink="https://github.com/codebase-berkeley/teacher-portal" title="Ygnacio Valley Teacher Portal" description="Web"/>
          <WorkCard image={vector} extlink="https://github.com/leebianca/vector-visual" title="Vector Addition Visualization" description="Web"/>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default Work;
