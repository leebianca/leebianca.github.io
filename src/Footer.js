import React, { useEffect, useState } from 'react';
import {
    Link
  } from "react-router-dom";
import {CallMade} from '@material-ui/icons';
var classNames = require('classnames');

function FbInternship() {
  const [hidden, setHidden] = useState(true);

  function handleClick() {
    setHidden(false);
    var textField = document.createElement('textarea');
    textField.innerText = "bianca.lee@berkeley.edu";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove()
    const element = document.querySelector('.copied-text');
    element.classList.add('animate__animated', 'animate__slideOutDown');
    setTimeout(() => setHidden(true), 5000);
  };

  return (
<div className="contact-wrapper" data-rellax-zindex="5">
          <div className="get-in-touch-wrapper">
            <div className={classNames({"animate__animated animate__slideOutDown": true, "copied-text": true, "hidden": hidden})}>
              My email has been copied to your clipboard ✨
            </div>
            <div className={classNames({"get-in-touch-text": true, "pad-hidden": !hidden})}>
                Get in touch
                <CallMade className="arrow-icon" fontSize="large" onClick={handleClick}/>
            </div>
            <div className="get-in-touch-details-wrapper">
            <div className="get-in-touch-details-text">
            Talk to me about anything – whether it's your favorite books, why bread is the best food, or the best/worst design decisions you've ever seen.
                {/* Talk to me about <Typist
            startDelay={900}
            cursor={{
              show: false,
              blink: true,
              hideWhenDone: true,
              hideWhenDoneDelay: 0,
            }}
            className="style-typist"
          >
            <h3 className="get-in-touch-details-text">the latest Disney animated remakes</h3>
            <Typist.Backspace count={30} delay={900} />
            <h3 className="get-in-touch-details-text">coffee</h3>
            <Typist.Backspace count={20} delay={900} />
            <h3 className="get-in-touch-details-text">anything</h3>
          </Typist> */}
            </div>
            </div>
          </div>
          <div className="find-me-on-wrapper">
            <div className="find-me-on-text">
                ...or find me on
            </div>
            <div className="footer-links-wrapper">
                <a href="https://www.linkedin.com/in/biancalee27/" className="link-text" target="_blank">LinkedIn</a>
                <a href="https://twitter.com/bicanalee" className="link-text" target="_blank">Twitter</a>
                <a href="https://www.goodreads.com/user/show/101862765-bianca-lee" className="link-text" target="_blank">Goodreads</a>
                <a href="https://github.com/leebianca" className="link-text" target="_blank">Github</a>
                <a href="https://www.behance.net/biancalee" className="link-text" target="_blank">Behance</a>
            </div>
          </div>
        </div>
  );
}

export default FbInternship;
