import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Rellax from 'rellax';
import Footer from './Footer.js';
import Experience from './components/Experience/Experience';
import pinkcircle from './assets/pink-circle.png';
import yellowcircle from './assets/yellow-circle.png';
import './App.css';


function Home() {
  // const backgroundFontSize = useScrollChange();


  useEffect(() => {
    new Rellax(".background-text-slow", { 
      speed: 10,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(".landing-text-slow", { 
      speed: 0,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax(".story-text-slow", { 
      speed: 3,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax(".story-text-slowish", { 
      speed: 5,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax(".circle-slow", { 
      speed: 5,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    new Rellax(".red-circle-slow", { 
      speed: 8,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    
    //     window.addEventListener('scroll', () => {
    //   document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    // }, false);
  }, []);


  // setHidden(document.documentElement.scrollTop > 1100);

  return (
    <div className="App">
      <div className="nav-bar-wrapper">
      <Link to="/" className="nav-link-home">Bianca Lee</Link>
      <div className="nav-bar-container">
          <Link to="/about" className="nav-bar-link">About</Link>
        <Link to="/work" className="nav-bar-link">Work</Link>
        </div>
      </div>
      <div className="landing-text-wrapper">
        {/* <div className="landing-text-padding"/> */}
        <div className="landing-text landing-text-slow">
          Hey there! I'm <p className="landing-text-red">Bianca</p>.
        </div>
      </div>
      <div className="story-text-wrapper story-text-slow" data-rellax-zindex="5">
          <div className="story-text">
            My passions and learnings are best traced through the things I create
            </div>
      </div>
      <div className="story-text-wrapper-2 story-text-slowish" data-rellax-zindex="5">
          <div className="story-text-right">
            and through the things I like to spend my time on.
          </div>
      </div>
      <img className="yellow-circle circle-slow" src={yellowcircle}/>
      <img className="yellow-circle-2 red-circle-slow" src={yellowcircle}/>
      <img className="pink-circle circle-slow" src={pinkcircle}/>
      <img className="pink-circle-2 circle-slow" src={pinkcircle}/>
      <div className="list-text-wrapper background-text-slow" data-rellax-zindex="-1">
        <div className="list-text" >Coding<br/>Designing<br/>Writing<br/>Teaching<br/>Doing yoga<br/>Meeting new people<br/>Reading<br/>Making cold brew<br/>Traveling<br/>Eating pizza bites</div>
      </div>
      <Experience/>
      <Footer/>
      <div className="subtract"/>
    </div>
  );
}

export default Home;
