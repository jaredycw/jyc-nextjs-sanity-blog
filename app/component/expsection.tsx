
"use client"
import React, { useRef } from 'react';
import ExperimentImage from "./expimage";

export default function ExperimentSection() {

  const sliderExpRef = useRef(null);

  function ExpPrev() {
    console.log('its left');
    sliderExpRef.current.scrollLeft -= 380;
  }
  function ExpNext() {
    console.log('its right');
    sliderExpRef.current.scrollLeft += 380;
  }

  return (
              <>
                          
                    <div className="slider-container">
                      
                      <div ref={sliderExpRef} id="slider-scroller" className="slider-scroller">
                        <ExperimentImage />
                      </div>

                      <div onClick={ExpPrev} className="control-prev-btn">
                          <span className="icon-left"></span>
                      </div>
                      <div onClick={ExpNext} className="control-next-btn">
                          <span className="icon-right"></span>
                      </div>
                      <div className="slider-mask-left"></div>
                      <div className="slider-mask-right"></div>
                    
                    </div>

              </>
  );
}