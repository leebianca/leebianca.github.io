import React, { useEffect, useState } from 'react';
import { ArrowUpward } from '@material-ui/icons';
import './ScrollToTop.css';

function ScrollToTop() {
    const [isVisible, setVisible] = useState(false);


    function toggleVisibility() {
        if (!isVisible && window.pageYOffset > 400) {
            setVisible(true);
        }
        else if (isVisible && window.pageYOffset <= 400) {
            setVisible(false);
        }
    }
    
    window.addEventListener('scroll', toggleVisibility);

  return (
    <div className="scroll-top-wrapper">
    {isVisible && <div className="scroll-up" onClick={()=> {window.scrollTo({top: 0, behavior: 'smooth'});}}><ArrowUpward className="upward"/>Scroll To Top</div>}
    </div>
  );
}

export default ScrollToTop;
