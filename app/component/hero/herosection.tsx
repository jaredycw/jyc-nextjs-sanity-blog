"use client"
 
import logoA from '../../images/svg/logo-a.svg'
import logoB from '../../images/svg/logo-b.svg'
import Link from 'next/link';
import Image from 'next/image';
import { LazyMotion, domAnimation, m } from "framer-motion"

export default function HeroSection() {

  const HeroImage = "https://cdn.sanity.io/images/mrzc8peh/production/af424b3f44f8455f6d5f74ff61e593a2ea42eaed-1170x1879.jpg"
  const HeroImageLqip = "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYDBAcF/8QAJhAAAQMDAwQCAwAAAAAAAAAAAQIDBQAEEQYSURQhIkEHMRMjcf/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/8QAHhEAAQQCAwEAAAAAAAAAAAAAAgABAxEEIQUxoSL/2gAMAwEAAhEDEQA/AMgZkUQ0iOpcyyU5Ozvk+jUL+qbVa8oQ5jd9Hir/AMhxaJDVN8uFjXLawZeLRwd2TyB6Fc+70S81Fu3RcCVIG4DkUEiiBmCR99KmLTnZxjrtOcPbIubBt5KikL8gD2orOo6RfVapDl2sFB2gDgUUEsSS3o/EweQjpvj1agJ1voJqT6ZTSGgUkqOQtdKdvqpi+hXGXFFBUP2Z+gKr6l1LFu6EYjItaw6Vj8iVjyPJNKcOwHI+8Hckt7hj1ikR4zSMUhtT2jyZhx1GD21bXLdWA6sNqOzJx/KKhoqnSk2v/9k="
  
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
                  <div className="hero-image-container">
                    <Image src={HeroImage} width={150} height={150} alt=" Me - Icon Image" className="hero-image" loading="lazy" blurDataURL={HeroImageLqip} placeholder='blur' />
                  </div>
                  <div className="logo-svg-a">
                    <Image src={logoA} width={25} height={25} alt="Logo SVG A" />
                  </div>
                  <div className="logo-svg-b">
                    <Image src={logoB} width={25} height={25} alt="Logo SVG B"  />
                  </div>
                  
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