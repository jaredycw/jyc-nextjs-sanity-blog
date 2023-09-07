"use client"
import React, { useRef} from 'react';
import WorkImage from './workimage';
import { useEffect } from 'react';
import { useState } from 'react';

export default function WorkSection() {
  const [element, setElement] = useState(false);
  const sliderRef = React.useRef(null);
  

  useEffect(() => {
   setElement(false);
    const element = sliderRef.current;
    console.log("Slider Ref is ", element); 
  }, []);

  function prev() {
    console.log('its left');

      sliderRef.current.scrollLeft -= 380;

  }
  function next() {
    console.log('its right');

      sliderRef.current.scrollLeft += 380;

  } 
  return (

                
                <div className="slider-container">
                  
                  <div ref={sliderRef} id="slider-scroller" className="slider-scroller">
                    <WorkImage />
                  </div>

                  <div onClick={prev} className="control-prev-btn">
                      <span className="icon-left"></span>
                  </div>
                  <div onClick={next} className="control-next-btn">
                      <span className="icon-right"></span>
                  </div>
                  <div className="slider-mask-left"></div>
                  <div className="slider-mask-right"></div>
                
                </div>
   
  
       
  );
}
