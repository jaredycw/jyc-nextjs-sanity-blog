import HeroImage from '../../images/hero-img.jpg'
import Link from 'next/link';
import Image from 'next/image';
import { LazyMotion, domAnimation, m } from "framer-motion"

export default function HeroSection() {

  const content = {
    animate: {
      transition: { staggerChildren: 0.1, delayChildren: 2.8 },
    },
  };
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  

  return (
        <div className="hero-wrapper">
          <LazyMotion features={domAnimation}>
          <m.div className="container mx-auto hero-container">
         
            <m.div className="hero-bg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay:2,
                  ease: [0.87, 0, 0.13, 1],
                }}
            >
            </m.div>
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-10 hero-section backdrop-opacity-50 ">
              <m.div className="self-center"
              initial={{ x:-500 }}
              animate={{ x:0 }}
              transition={{
                duration: 1,
                delay: 3.5,
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
              <m.div className="self-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay:3.5,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}
              >
                <Image src={HeroImage} width={150} height={35} alt="Hero Image" className="md:float-right hero-image"/>
              </m.div>
                  
            </div>

            
          </m.div>
          </LazyMotion>

          <Link href="#jyz-post-list" >
          <div className="icon-scroll"></div>
          </Link>

        </div>
  );
}