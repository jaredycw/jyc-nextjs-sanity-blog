"use client"
import React, { useRef} from 'react';
import { LazyMotion, domAnimation, m } from "framer-motion"
import ExploreMoreBtn from '../exlporemorebtn';
import { useEffect } from 'react';
import { useState } from 'react';

export default function MotionWorks({
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

                <LazyMotion features={domAnimation}> 
                  <m.div id="section-design"
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x:0 }}   
                    viewport={{ once: true }} 
                    transition={{
                      duration: 1,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}                     
                  >
                  <div className="container mx-auto">
                    <div className="section-title">
                        <span className="section-name">Design</span>
                        <span className="section-desc">About Works</span>
                      </div>
                    </div>
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
                <div className="container mx-auto"><ExploreMoreBtn target="works"/> </div>
                </m.div>
                </LazyMotion>
   
  
       
  );
}
