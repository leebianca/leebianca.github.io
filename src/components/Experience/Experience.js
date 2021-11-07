import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WorkCard from '../WorkCard.js';
import cb from '../../assets/codebase.png';
import coda from '../../assets/coda.png';
import dailycal from '../../assets/dailycal.png';
import fb from '../../assets/fb.png';
import wdd from '../../assets/wdd.png';
import './Experience.css';


function Experience(props) {
  return (
    <div className="experience-wrapper">
    <div className="what-im-doing-text">What I've been up to</div>
    <WorkCard image={coda} extlink="https://coda.io/@bianca/reflections-on-my-internship-at-coda" title="Coda" description="Software Engineer Intern, Kleiner Perkins Fellow"/>
    <WorkCard image={dailycal} extlink="https://www.dailycal.org/author/biancalee/" title="The Daily Californian" description={`Opinion Columnist of "Head in the Cloud"`}/>
    <WorkCard image={fb} link="/fb" title="Facebook" description="Software Engineer Intern"/>
    <WorkCard image={wdd} extlink="https://wdd.io" title="CS 198 Web Design DeCal" description="Head Instructor"/>
    <WorkCard image={cb} extlink="https://codebase.berkeley.edu" title="Codebase" description="Project Manager, Developer"/>
    </div>
  );
}

export default Experience;
