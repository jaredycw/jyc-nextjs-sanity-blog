
"use client"
import React, { useRef } from 'react';
import { LazyMotion, domAnimation, m } from "framer-motion"
import ExploreMoreBtn from '../exlporemorebtn';

export default function MotionExperiments({
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
     
                  <LazyMotion features={domAnimation}>   
                    <m.div id="section-exp"
                      initial={{ opacity: 0, x: 300 }}
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
                          
                          <span className="section-name">Experiment</span>
                        
                          <span className="section-desc">About Stuffs</span>
                        
                        </div>
                      </div>     
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
                      <div className="container mx-auto"><ExploreMoreBtn target="experiments" /> </div>    
                
                    </m.div>  
                  </LazyMotion>

        
  );
}