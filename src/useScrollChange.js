import {useEffect, useRef, useState} from 'react';

function useScrollChange() {
    console.log("here");
    const prevScrollY = useRef(0);
    const [backgroundFontSize, setFontSize] = useState(125);
    const [scrollingUp, setScrollingUp] = useState(false);

    function handleScroll() {
    const currScrollY = document.documentElement.scrollTop;
    if (currScrollY > 1700) {
        return;
    }
    if (prevScrollY.current < currScrollY && scrollingUp) {
        setScrollingUp(false);
    } else {
        setScrollingUp(true);
    }
    prevScrollY.current = currScrollY;

    console.log("scrollTop: " + document.documentElement.scrollTop);
    var newFontSize = 125-(document.documentElement.scrollTop*0.05);
    console.log("newFontSize before min: " + newFontSize);
    console.log("backgroundFontSize: " + backgroundFontSize);

    if (backgroundFontSize < 30) {
        newFontSize = 30;
    }
    console.log("newFontSize after min: " + newFontSize);
    setFontSize(newFontSize); 
}

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [backgroundFontSize]);

  return backgroundFontSize;
}

export default useScrollChange;