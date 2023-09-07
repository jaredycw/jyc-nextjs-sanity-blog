"use client"
import React from 'react';
import ExploreMoreBtn from '../exlporemorebtn';
import HeroSection from '../hero/herosection';
import PostSection from '../postsection';
import HobbySection from '../hobbysection';
import MovieSection from '../moviesection';
import CraftSection from '../craftsection';
import WorkSection from '../worksection';
import ExperimentSection from '../expsection';
import { useEffect } from 'react';
import { LazyMotion, domAnimation, m } from "framer-motion"
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

 

export default function MainContent() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 2.5 });
    return animation.stop;
  }, []);

    const blackBox = {
        initial: {
          height: "100%",
          bottom: 0,
        },
        animate: {
          height: 0,
          transition: {
            when: "afterChildren",
            duration: 1.5,
            delay:2.5,
            ease: [0.87, 0, 0.13, 1],
          },
        },
      };

 
      
    

  return(
    <div className="homepage">

      <motion.div
        className="preloader"
        initial="initial"
        animate="animate"
	      variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      >
        <motion.div className="preloader-container text-center">
          <motion.h1 className="preloader-text text-center text-9xl"
                initial={{ scale: 0.25 }}
                animate={{ scale: 1 }}
                transition={{
                  when: "afterChildren",
                  duration: 2,
                  ease: [0.87, 0, 0.13, 1],
                }}
          >
            {rounded}
          </motion.h1>
        </motion.div>
      </motion.div>      
      <LazyMotion features={domAnimation}>

          
      <HeroSection/>
      
    <div className="container mx-auto"> 
          <m.div id="jyz-post-list"
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y:0 }}  
            viewport={{ once: true }}  
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01]
            }}    
          >
            <div className="section-title">
              <span className="section-name">Blog</span>
              <span className="section-desc">About Life</span>
            </div>
            <PostSection />
            <ExploreMoreBtn target="posts" />
          </m.div>

          <m.div id="section-hobby"
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y:0 }}   
            viewport={{ once: true }} 
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}    
          >
            <HobbySection />
          </m.div>

          <m.div id="section-watching"
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y:0 }}   
            viewport={{ once: true }} 
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}              
          >
            <MovieSection />
          </m.div>

          <m.div id="section-3d"
            initial={{ opacity: 0, y: 300}}
            whileInView={{ opacity: 1, y:0 }}   
            viewport={{ once: true }} 
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}           
          
          >
            <CraftSection />
          </m.div>
          </div>

          <div className="section-wrapper">  
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
              <WorkSection />
              <div className="container mx-auto"><ExploreMoreBtn target="works"/> </div>
            </m.div>
          </div>


          <div className="section-wrapper">
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
                <ExperimentSection />
                <div className="container mx-auto"><ExploreMoreBtn target="experiments" /> </div>    
                
            
                
            </m.div>
          </div>
          </LazyMotion>
    

    </div>

    
  );

}

 
