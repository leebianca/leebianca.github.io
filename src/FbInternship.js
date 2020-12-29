import React, { useEffect, useState } from 'react';
import {
    Link
  } from "react-router-dom";
import './Projects.css';
import Footer from './Footer.js';
import fb from './assets/fb-banner.png';

function FbInternship() {
  return (
    <div className="FbInternship">
        <div className="nav-bar-wrapper">
      <Link to="/" className="nav-link-home">Bianca Lee</Link>
      <div className="nav-bar-container">
          <Link to="/about" className="nav-bar-link">About</Link>
        <Link to="/work" className="nav-bar-link">Work</Link>
        </div>
      </div>
        <div className="work-banner-wrapper wrapper">
        <img className="work-banner" src={fb}/>
        </div>
        <div className="header-wrapper wrapper">
            <div className="loc-and-pos">
            <div className="header-text">
                Facebook
            </div>
            <div className="subheader-text">
                Software Engineer Intern
            </div>
            </div>
            <div className="subheader-text date">May–Aug 2020</div>
        </div>
        <div className="writeup-wrapper wrapper">
            <div className="subheader-text left-column">Background</div>
            <div className="paragraph-text right-column">During my stint at Facebook, my team was in charge of the new Facebook redesign of 2020, overhauling the previous browser experience for a faster and cleaner experience. I had the opportunity of watching the site get rolled out at the end of my internship.</div>
        </div>
        <div className="writeup-wrapper wrapper">
            <div className="subheader-text left-column">What I did</div>
            <div className="paragraph-text right-column">I worked closely with a handful of engineers, some product designers, and a number of PM folks across multiple teams to build and integrate features into different Facebook products. I built out new UI components and worked on reusable responsive components used for photo viewing and navigation. I also conducted snapshot tests and A/B tests for these features.</div>
        </div>
        <div className="writeup-wrapper wrapper">
            <div className="subheader-text left-column">Technologies used</div>
            <div className="paragraph-text right-column">React, Redux, GraphQL</div>
        </div>
        <Footer/>
    </div>
  );
}

export default FbInternship;
