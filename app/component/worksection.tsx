"use client"
import React, { useRef} from 'react';
import { LazyMotion, domAnimation, m } from "framer-motion"
import ExploreMoreBtn from './exlporemorebtn';
import { useEffect } from 'react';
import { useState } from 'react';

export default function WorkSection({
  children,
}: {
  children: React.ReactNode
}) {
  const [element, setElement] = useState(false);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  

  useEffect(() => {
   setElement(false);
    const element = sliderRef.current;
    //console.log("Slider Ref is ", element); 
  }, []);

  function prev() {
    //console.log('its left');
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 380;
    }

  }
  function next() {
    //console.log('its right');
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 380;
    }

  } 
  return (

                
                <div className="slider-container">
                  
                  <div ref={sliderRef} id="slider-scroller" className="slider-scroller">
                    {children}
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
