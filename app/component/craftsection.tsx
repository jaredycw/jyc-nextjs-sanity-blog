"use client"
import { LazyMotion, domAnimation, m } from "framer-motion"

export default function CraftSection() {
  return (
    <LazyMotion features={domAnimation}> 
      <m.div 
      className="py-40"
      id="section-3d"
      initial={{ opacity: 0, y: 300}}
      whileInView={{ opacity: 1, y:0 }}   
      viewport={{ once: true }} 
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}           
    
      >
          <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 uppercase ">Stay Tuned!</h1>
          <p>For Three JS</p>
      </m.div>   
    </LazyMotion>     
  )
}