import React from 'react';
import {
    Link
  } from "react-router-dom";
import './Projects.css';
import './About.css';
import Footer from './Footer.js';
import fb from './assets/fb-banner.png';
import nickideation1 from './assets/nick-ideation-1.png';
import nickideation2 from './assets/nick-ideation-2.png';
import nickideation3 from './assets/nick-ideation-3.png';
import onboarding1 from './assets/onboarding-1.png';
import onboarding2 from './assets/onboarding-2.png';
import onboarding3 from './assets/onboarding-3.png';
import onboarding4 from './assets/onboarding-4.png';
import challenge1 from './assets/challenge-1.png';
import challenge2 from './assets/challenge-2.png';
import challenge3 from './assets/challenge-3.png';
import challenge4 from './assets/challenge-4.png';
import challenge5 from './assets/challenge-5.png';
import ar1 from './assets/ar-1.png';
import ar2 from './assets/ar-2.png';

function Nickelodeon() {
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
                Nickelodeon Multiverse
            </div>
            <div className="subheader-text">
                Nickelodeon x Adobe Creative Jam
            </div>
            </div>
            <div className="subheader-text date">April 2020</div>
        </div>
        <div className="writeup-wrapper wrapper">
            <div className="subheader-text left-column">Overview</div>
            <div className="paragraph-text right-column">Nickelodeon Multiverse is a designathon project created in collaboration with <a href="https://juliaxliu.me/" className="highlight-text">Julia Liu</a> and <a href="https://jagopang.com/" className="highlight-text">Jago Pang</a>. Our app concept received recognition as a Runner Up (top 20 teams) out of 145 teams.
                <div className="break"/>
The Multiverse is an app that encourages social interaction and teamwork via the multiple universes of the Nickelodeon World. Through AR, players join their favorite universe and work through daily challenges, from creative prompts to short exercises to educational videos. The completion of each category rewards points to the player, which can be used to unlock more features, customize their character, and goes towards the point total of their universe. At the end of each week, the universe with the most points will be awarded a prize. Players can also add friends and challenge their friends to complete their daily challenges.

</div>
        </div>
        <div className="writeup-wrapper wrapper">
            <div className="subheader-text left-column">Background</div>
            <div className="paragraph-text right-column">We were given the prompt to “design a tablet app in the spirit of #KidsTogether that provides a safe way for kids to communicate, share, and connect with their friends and family.” 
                <div className="break"/>
This led us to ask the questions: <b>HMW facilitate kid-to-kid interaction online? HMW incorporate Nickelodeon to educate kids and keep kids entertained? HMW promote creativity?</b></div>
        </div>
        <div className="writeup-wrapper wrapper">
            <div className="subheader-text left-column">Ideation</div>
            <div className="paragraph-text right-column">
            We started with conducting market research and brainstorming some ideas for a children’s app. We created a game concept and created a user flow, and then took our ideas to the drawing board to create low-fidelity mockups.
                <div className="proj-photo-wrapper">
                    <img className="proj-photo" src={nickideation1}/>
                    <img className="proj-photo" src={nickideation2}/>
                    <img className="proj-photo" src={nickideation3}/>
                </div>
            </div>
        </div>
        <div className="writeup-wrapper wrapper">
        <div className="paragraph-text full-column">
            <div className="proj-subheader">Onboarding</div>
            To encourage participation, we created a competitive aspect between different Nickelodeon universes. At the start of their Multiverse experience, kids choose their favorite Nickelodeon universe and customize their avatar. They earn points on behalf of their Nickelodeon universe to win the most points.
            <div className="proj-photo-wrapper">
                <img className="proj-tablet-screenshot" src={onboarding1}/>
                <img className="proj-tablet-screenshot" src={onboarding2}/>
                <img className="proj-tablet-screenshot" src={onboarding3}/>
                <img className="proj-tablet-screenshot" src={onboarding4}/>
            </div>
            <div className="proj-subheader">Daily Challenges</div>
            The goal of daily challenges is to encourage social interaction between kids and their friends, as well as promote completion of educational activities that kids might not necessarily complete otherwise.            <div className="proj-photo-wrapper">
                <img className="proj-tablet-screenshot" src={challenge1}/>
                <img className="proj-tablet-screenshot" src={challenge2}/>
                <img className="proj-tablet-screenshot" src={challenge3}/>
                <img className="proj-tablet-screenshot" src={challenge4}/>
                <img className="proj-tablet-screenshot" src={challenge5}/>
            </div>
            <div className="proj-subheader">Augmented Reality</div>
            The goal of integrating AR into the Multiverse app was to encourage kids to interact with their real-life environment while staying engaged with the app.
            <div className="proj-photo-wrapper">
                <img className="proj-tablet-screenshot" src={ar1}/>
                <img className="proj-tablet-screenshot" src={ar2}/>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Nickelodeon;
