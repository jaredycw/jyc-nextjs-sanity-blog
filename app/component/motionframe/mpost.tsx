"use client"
import { LazyMotion, domAnimation, m } from "framer-motion"
import ExploreMoreBtn from "../exlporemorebtn";


export default function MotionPost({
  children,
}: {
  children: React.ReactNode
}){
         
    return(
        <LazyMotion features={domAnimation}> 
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
            {children}
            <ExploreMoreBtn target="posts" />
          </m.div>        
        
        </LazyMotion>
    )
}