import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WorkCard from '../WorkCard.js';
import cb from '../../assets/codebase.png';
import fb from '../../assets/fb.png';
import wdd from '../../assets/wdd.png';
import './Experience.css';


function Experience(props) {
  return (
    <div className="experience-wrapper">
    <div className="what-im-doing-text">What I've been up to</div>
    <WorkCard image={fb} link="/work/fb" title="Facebook" description="Software Engineer Intern"/>
    <WorkCard image={wdd} link="https://wdd.io" title="CS 198 Web Design DeCal" description="Head Instructor"/>
    <WorkCard image={cb} link="https://codebase.berkeley.edu" title="Codebase" description="Project Manager, Developer"/>
    </div>
  );
}

export default Experience;
