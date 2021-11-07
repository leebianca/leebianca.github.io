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
          <div className="about-paragraph">On campus, I've been teaching frontend web development and design at the <a href="https://wdd.io" className="highlight-text" target="_blank">Web Design DeCal</a>, leading a team as a project manager for <a href="https://codebase.berkeley.edu" className="highlight-text" target="_blank">Berkeley Codebase</a>, and working on pro-bono graphic design projects with <a href="https://innovativedesign.club/" className="highlight-text" target="_blank">Innovative Design</a>. I've also written a semester-long opinion column called <a href="https://www.dailycal.org/author/biancalee/" className="highlight-text" target="_blank">"Head in the Cloud"</a> on the implications of tech at The Daily Californian.</div>
          <div className="about-paragraph">Last summer, I worked on Microsoft Teams integrations at <a href="https://coda.io/" className="highlight-text" target="_blank">Coda</a> as a <a href="https://fellows.kleinerperkins.com/meet-the-fellows/2021/" className="highlight-text" target="_blank">Kleiner Perkins engineering fellow</a>. I'm excited to rejoin the team after I graduate.</div>
          <div className="about-paragraph">~</div>
          <div className="about-paragraph">I'm interested in design systems, information-mapping tools, building digital communities, and the inextricable nature of our social, economic, and political geographies. </div>
          <div className="about-subheader">Some of my favorite things</div>
          <div className="about-paragraph">• <a href="https://airtable.com/shrbvZFU7357K39mD" target="_blank" className="highlight-text">Books</a></div>
          <div className="about-paragraph">• The Daily, hosted by Michael Barbaro  </div>
          <div className="about-paragraph">• Game of Thrones</div>
          <div className="about-paragraph">• Funky nail art</div>
          <div className="about-paragraph">• My Leuchtturm1917 journal, where I gather and organize my thoughts</div>
          <div className="about-subheader">Principles I live and learn by</div>
          <div className="about-paragraph">• <div className="bold-text"> Prioritize breadth of experience.</div> To innovate, it's so important to be able to synthesize new ideas across different domains. Specializing comes with time.   </div>
          <div className="about-paragraph">• <div className="bold-text"> Time is valuable.</div> "Busy" isn't necessarily better. Make time for yourse, and always make time for people who matter.</div>
          <div className="about-paragraph">• <div className="bold-text"> Remember the "why".</div> When the big picture is kept in mind, it's more difficult to get bogged down by the miniscule.</div>
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
