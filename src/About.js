import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import AboutPhoto from "./assets/about.jpg";
import Footer from './Footer.js';
import "./About.css";


function About() {

  return (
    <div className="About">
      <div className="nav-bar-wrapper">
        <Link to="/" className="nav-link-home">Bianca Lee</Link>
        <div className="nav-bar-container">
          <Link to="/about" className="nav-bar-link">About</Link>
          <Link to="/work" className="nav-bar-link">Work</Link>
        </div>
      </div>
      <div className="about-content-wrapper">
        <div className="about-image-wrapper"><img className="about-image" src={AboutPhoto}/></div>
        <div className="about-left-content">
          <div className="about-paragraph">hey there!</div>
          <div className="about-header">I’m Bianca.</div>
          <div className="about-paragraph">Currently, I'm studying Computer Science, Political Economy, and Design at UC Berkeley. I'm driven by learning and growing as much as I can.</div>
          <div className="about-paragraph">On campus, I've been teaching frontend web development and design at the <a href="https://wdd.io" className="highlight-text" target="_blank">Web Design DeCal</a>, leading a team as a project manager for <a href="https://codebase.berkeley.edu" className="highlight-text" target="_blank">Berkeley Codebase</a>, and working on pro-bono graphic design projects with <a href="https://innovativedesign.club/" className="highlight-text" target="_blank">Innovative Design</a>.</div>
          <div className="about-paragraph">Last summer, I was a software engineer intern at <a href="https://engineering.fb.com/" className="highlight-text" target="_blank">Facebook</a> working on UI components for the new Facebook website.</div>
          <div className="about-paragraph">~</div>
          <div className="about-paragraph">I'm interested in design systems, tools, and processes, building digital communities, and how those things affect our social, economic, and political landscapes. </div>
          <div className="about-subheader">Some of my favorite things</div>
          <div className="about-paragraph">• <a href="https://airtable.com/shrbvZFU7357K39mD" target="_blank" className="highlight-text">Books</a></div>
          <div className="about-paragraph">• The Daily, hosted by Michael Barbaro  </div>
          <div className="about-paragraph">• Game of Thrones</div>
          <div className="about-paragraph">• Making coffee in the morning</div>
          <div className="about-paragraph">• My Leuchtturm1917 journal</div>
          <div className="about-subheader">Guiding principles</div>
          <div className="about-paragraph">• <div className="bold-text"> Prioritize breadth of experience.</div> To innovate, it's so important to be able to synthesize new ideas across different domains. Don't worry about specializing – it'll come with time.   </div>
          <div className="about-paragraph">• <div className="bold-text"> Time is valuable.</div> Don't settle for opportunities just to stay busy, make sure to take time for yourself, and always make time for people who matter to you.</div>
          <div className="about-paragraph">• <div className="bold-text"> Remember why you're doing things.</div> Avoid doing the bare minimum, push to improve whatever you're working on, and stay creative.  </div>
          <div className="about-paragraph">• <div className="bold-text"> Do the right thing.</div></div>
        </div>
      </div>
      <div className="footer-container">
        <Footer/>
      </div>
    </div>
  );
}

export default About;
