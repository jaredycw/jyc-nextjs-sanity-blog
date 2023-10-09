"use client"
import HeroImage from '../../images/hero-img.jpg'
import logoA from '../../images/svg/logo-a.svg'
import logoB from '../../images/svg/logo-b.svg'
import Link from 'next/link';
import Image from 'next/image';
import { LazyMotion, domAnimation, m } from "framer-motion"

export default function HeroSection() {

  return (
     
        <div className="hero-wrapper container mx-auto">
          <LazyMotion features={domAnimation}>
          
          <m.div className="hero-container">
         
            <m.div className="hero-bg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay:1.5,
                  ease: [0.87, 0, 0.13, 1],
                }}
            >

            </m.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 hero-section justify-items-center md:justify-items-stretch mb-10 md:mb-7">
              <m.div
              className="self-center float-right"
              initial={{ x:-500 }}
              animate={{ x:0 }}
              transition={{
                duration: 1,
                delay: 3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
              >
                  <h1 className="hero-title">Jared Yeung</h1>
                  <p className="hero-description ">Web Designer & Developer, Self Learner<br></br>Digital Design & Developing Field
                      <br></br>#Open to Work #Freelance</p>
                  <Link href="/contact">
                  <button className="tag">Contact Me  <span className="icon-down"></span></button>
                  </Link>
              </m.div>
              <m.div
                  className="self-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay:3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
              >
                <div className="hero-image-wrapper">
                  <div className="hero-image-container"><Image src={HeroImage} width={150} height={150} alt="Weirdo Image" className="hero-image" loading="lazy" /></div>
                  <div className="logo-svg-a"><Image src={logoA} width={25} height={25} alt="Logo SVG A" /></div>
                  <div className="logo-svg-b"><Image src={logoB} width={25} height={25} alt="Logo SVG B"  /></div>
                </div>
              </m.div>
                  
            </div>

            
          </m.div>
          </LazyMotion>

          <Link href="#jyz-post-list">
          <div className="icon-scroll" ></div>
          </Link>

        </div>
  );
}