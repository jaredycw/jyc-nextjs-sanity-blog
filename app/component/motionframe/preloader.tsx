"use client"
import { useEffect, useState } from 'react';
import { LazyMotion, domAnimation, m } from "framer-motion"
import { useMotionValue, useTransform, animate } from "framer-motion";

export default function PreLoader() {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
    const [shouldHide, setShouldHide] = useState(false);

    const handleAnimationComplete = () => {
      setTimeout(() => {
        setShouldHide(true);
      }, 2000); // Delay in milliseconds before hiding the element
    };
  
    useEffect(() => {
        const animation = animate(count, 100, { duration: 1.5 });
        return animation.stop;
        // eslint-disable-next-line react-hooks/exhaustive-deps  
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
                duration: 1,
                delay:2,
                ease: [0.87, 0, 0.13, 1],
              },
            },
          };
    
     
    return(
        <LazyMotion features={domAnimation}>
      <m.div
        className="preloader"
        initial="initial"
        animate="animate"
	      variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      >
        <m.div className="preloader-container text-center">
          <m.h1
            className={`preloader-text text-center text-9xl ${
              shouldHide ? "hidden" : ""
            }`}
            initial={{ scale: 0.25 }}
            animate={{ scale: 1,
            }}
            transition={{
              when: "afterChildren",
              duration: 1.1,
              ease: [0.87, 0, 0.13, 1],
            }}
            onAnimationComplete={handleAnimationComplete}
          >
            {rounded}
          </m.h1>
        </m.div>
      </m.div>     
      </LazyMotion>
    )
}