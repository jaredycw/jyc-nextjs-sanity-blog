"use client"
import Link from "next/link"
import Image from "next/image"
import logo from "../../images/svg/logo_v2.svg"
import React from "react"
import { useState, useEffect } from "react"
 
export default function Header(){

    const [isActive, setIsActive] = useState(false);
 

    const handleHeaderClick = () => {
          setIsActive(!isActive);
    };
    

    const handleOutsideClick = (event:any) => {
      if (!event.target.closest('.header') && !event.target.closest('.nav-mobile')) {
        setTimeout(() => {
          setIsActive(false);
        }, 100); // Delay of  (100 milliseconds)
      }
    };

    
    useEffect(() => {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);


    const [activeTheme, setActiveTheme] = useState("light");
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    useEffect(() => {
      const savedTheme = window.localStorage.getItem("theme");
      savedTheme && setActiveTheme(savedTheme);
    }, []);

    useEffect(() => {
      document.body.dataset.theme = activeTheme;
    }, [activeTheme]);



    return(
        <header className={`sticky-header ${isActive ? 'active' : ''}`} >
          <div className="header-wrapper">
            <div className="menu-bar-supper">
              <div className="menu-bar-wrapper">
                <div className="menu-bar flex items-center">
                <div className="font-black">
                      <button 
                      onClick={() => setActiveTheme(inactiveTheme)}
                      className="theme-toggle uppercase" 
                      id="theme-toggle" 
                      title="Toggles light & dark" 
                      aria-label="Toggles light & dark" 
                      aria-live="polite"
                      >
                       {activeTheme === 'dark' ? 'Light' : 'Dark'}
                      </button>
                  </div>
                  <div className="jydeco-line"></div>
                  <Link href='/' aria-label={`Home page`}>
                    <div className="logo">
                          <Image
                              src={logo}
                              width={63}
                              height={33}
                              alt="Logo"
                              className="logo-svg"
                          />     
                    </div>
                  </Link>
                  <div className="jydeco-line"></div>
                  <div className="flex items-center interact-box ">
                    <nav
                    title="Menu" 
                    aria-label="auto" 
                    aria-live="polite"        
                    >
                        <ul>
                            <li>
                                <div className="nav-mobile" onClick={handleHeaderClick}>
                                    <span className="nav-mobile-bar"></span>
                                    <span className="nav-mobile-bar"></span>
                                    <span className="nav-mobile-bar"></span>
                                </div>
                            </li>
                        </ul>
                    </nav>

                  </div>
                </div>
              </div>
            
            </div>   
            <div id="overlay-wrapper" className="overlay-menu-wrapper " >
              <div className="overlay-container">
                <div className="overlay-box">
                  
                </div>
                <nav className="overlay-nav" >
                  <ul className="overlay-menu">
                    <li><Link href="/about" aria-label={`Read more about me`}>About</Link></li>
                    <li><Link href="/posts" aria-label={`Read more posts`}>Blog</Link></li>
                    <li><Link href="/categories"  aria-label={`Read more categories`}>Categories</Link></li>
                    <li><Link href="/works" aria-label={`Read more works and design`}>Design</Link></li>
                    <li><Link href="/experiments" aria-label={`Read more experiments/stuffs/`}>Experiment</Link></li>
                    <li><Link href="/fetching" aria-label={`Read more about API`}>Fetching</Link></li>
                    <li><Link href="/growth" aria-label={`Read more about courses, certificates, and growth`}>Growth</Link></li>
                  </ul>
                </nav>

              </div>



            </div>

          </div>    
            
        </header>
    )
}