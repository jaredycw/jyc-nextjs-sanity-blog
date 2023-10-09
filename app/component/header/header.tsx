"use client"
import Link from "next/link"
import Image from "next/image"
import logo from "../../images/svg/logo.svg"
import React from "react"
import { useState, useEffect } from "react"
 
export default function Header(){

    const [isActive, setIsActive] = useState(false);
 

    const handleHeaderClick = () => {
          setIsActive(!isActive);
    };
    

    const handleOutsideClick = (event:any) => {
      if (!event.target.closest('.header') && !event.target.closest('.nav-mobile')) {
        setIsActive(false);
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
                      aria-label="auto" 
                      aria-live="polite"
                      >
                       {activeTheme === 'dark' ? 'Light' : 'Dark'}
                      </button>
                  </div>
                  <div className="jydeco-line"></div>
                  <Link href='/'>
                    <div className="logo">
                          <Image
                              priority
                              src={logo}
                              width={200}
                              height={200}
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
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/posts">Blog</Link></li>
                    <li><Link href="/categories" >Categories</Link></li>
                    <li><Link href="/works">Design</Link></li>
                    <li><Link href="/experiments">Experiment</Link></li>
                    <li><Link href="/fetching">Fetching</Link></li>
                  </ul>
                </nav>

              </div>



            </div>

          </div>    
            
        </header>
    )
}