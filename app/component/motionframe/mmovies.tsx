"use client"
import { LazyMotion, domAnimation, m } from "framer-motion"

export default function MotionMovies({
  children,
}: {
  children: React.ReactNode
}) {
    
     
    return(
        <LazyMotion features={domAnimation}>
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
            {children}
          </m.div>        
        
        </LazyMotion>
    )
}