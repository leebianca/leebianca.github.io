import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './WorkCard.css';


function WorkCard(props) {
  return (
    <div className="work-card-wrapper">
      <a href={props.link} className="work-card-link">
    <div className="card-photo-wrapper">
    <img className="card-photo" src={props.image}/>
    </div>
    <div className="work-card-text">
        <div className="work-card-title">{props.title}</div>
        <div className="work-card-description">{props.description}</div>
    </div>
    </a>
    </div>
  );
}

export default WorkCard;
