import React, { useEffect, useState } from 'react';
import {
    Link
  } from "react-router-dom";
import './Projects.css';
import './About.css';
import ScrollToTop from './ScrollToTop.js';
import Footer from './Footer.js';
import airbnb from './assets/airbnb-banner.png';
import ideation1 from './assets/ideation-1.png';
import ideation2 from './assets/ideation-2.png';
import mapstories1 from './assets/map-stories-1.png';
import mapstories2 from './assets/map-stories-2.png';
import triplog1 from './assets/trip-log-1.png';
import triplog2 from './assets/trip-log-2.png';
import triplog3 from './assets/trip-log-3.png';
import tripplanning1 from './assets/trip-planning-1.png';
import tripplanning2 from './assets/trip-planning-2.png';
import tripplanning3 from './assets/trip-planning-3.png';
import tripreflection1 from './assets/trip-reflection-1.png';
import tripreflection2 from './assets/trip-reflection-2.png';
import tripreflection3 from './assets/trip-reflection-3.png';

function Airbnb() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

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
        <img className="work-banner" src={airbnb}/>
        </div>
        <ScrollToTop/>
        <div className="header-wrapper wrapper">
            <div className="loc-and-pos">
            <div className="header-text">
                Airbnb Trips
            </div>
            <div className="subheader-text">
                Airbnb x Adobe Creative Jam
            </div>
            </div>
            <div className="subheader-text date">April 2020</div>
        </div>
        <div className="writeup-wrapper wrapper">
            <div className="subheader-text left-column">Overview</div>
            <div className="paragraph-text right-column">Airbnb Trips is a project that was made in collaboration with <a href="https://juliaxliu.me/" target="_blank" className="highlight-text">Julia Liu</a> and <a href="https://jagopang.com/" target="_blank" className="highlight-text">Jago Pang</a> for the Airbnb x Adobe Creative Jam.  We concepted a mobile app which allows people to seamlessly document their trips, share trips with others, and gather inspiration for future trips. </div>
        </div>
        <div className="writeup-wrapper wrapper">
            <div className="subheader-text left-column">Background</div>
            <div className="paragraph-text right-column">We were given the prompt to “empower families and groups of friends who travel together a collaborative way to document, organize, and share their travel experiences and stays to the larger Airbnb community.”<div className="break"/> This led us to ask the questions: <b>HMW help users document travel? HMW inspire others to travel? HMW provide travel recommendations?</b></div>
        </div>
        <div className="writeup-wrapper wrapper">
            <div className="subheader-text left-column">Ideation</div>
            <div className="paragraph-text right-column">
                After identifying problems, we brainstormed some ideas to help people plan trips, share trips with others, and reflect on their past trips. We took our ideas to create low-fidelity mockups with a user flow starting from discovering new trips to traveling.
                <div className="proj-photo-wrapper">
                    <img className="proj-photo" src={ideation1}/>
                    <img className="proj-photo" src={ideation2}/>
                </div>
            </div>
        </div>
        <div className="writeup-wrapper wrapper">
        <div className="paragraph-text full-column">
            <div className="proj-subheader">Map Stories</div>
            To encourage exploration, we created a map view which allows people to discover other people’s trips and new destinations.
            <div className="proj-photo-wrapper">
                <img className="proj-screenshot" src={mapstories1}/>
                <img className="proj-screenshot" src={mapstories2}/>
            </div>
            <div className="proj-subheader">Trip Log</div>
            The goal of a trip log was to focus the app on people’s upcoming trips and allow them to share previous trips with others. Each Trip is shared with whoever else went/is going on the trip, allowing people to collaboratively plan and document their experience.
            <div className="proj-photo-wrapper">
                <img className="proj-screenshot" src={triplog1}/>
                <img className="proj-screenshot" src={triplog2}/>
                <img className="proj-screenshot" src={triplog3}/>
            </div>
            <div className="proj-subheader">Trip Planning</div>
            Through integration with the Airbnb app, users can seamlessly add their Airbnb Stays and Airbnb Experiences to their Trip itinerary.           
             <div className="proj-photo-wrapper">
                <img className="proj-screenshot" src={tripplanning1}/>
                <img className="proj-screenshot" src={tripplanning2}/>
                <img className="proj-screenshot" src={tripplanning3}/>
            </div>
            <div className="proj-subheader">Trip Reflection</div>
            While and after traveling, people can document their experiences, with the choice to share within their traveling group or with the public. If they choose the latter, other users will be able to discover and view these experiences for inspiration.                
            <div className="proj-photo-wrapper">
                <img className="proj-screenshot" src={tripreflection1}/>
                <img className="proj-screenshot" src={tripreflection2}/>
                <img className="proj-screenshot" src={tripreflection3}/>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Airbnb;
