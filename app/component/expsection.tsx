
"use client"
import React, { useRef } from 'react';
import ExperimentImage from "./expimage";


export default function ExperimentSection({
  children,
}: {
  children: React.ReactNode
}) {

  const sliderExpRef = useRef<HTMLDivElement>(null);

  function ExpPrev() {
    if (sliderExpRef.current) {
      sliderExpRef.current.scrollLeft -= 380;
    }
  }

  function ExpNext() {
    if (sliderExpRef.current) {
      sliderExpRef.current.scrollLeft += 380;
    }
  }
  return (
     
                          
                    <div className="slider-container">
                      
                      <div ref={sliderExpRef} id="slider-scroller" className="slider-scroller">

                        {children}
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

        
  );
}