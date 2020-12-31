import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './WorkCard.css';

function WorkCard(props) {
  if (props.link) {
    return (
      <div className="work-card-wrapper">
        <Link to={props.link} className="work-card-link">
      <div className="card-photo-wrapper">
      <img className="card-photo" src={props.image}/>
      </div>
      <div className="work-card-text">
          <div className="work-card-title">{props.title}</div>
          <div className="work-card-description">{props.description}</div>
      </div>
      </Link>
      </div>
    );
  }
  else {
    return (
      <div className="work-card-wrapper">
        <a href={props.extlink} className="work-card-link">
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
  
}

export default WorkCard;
