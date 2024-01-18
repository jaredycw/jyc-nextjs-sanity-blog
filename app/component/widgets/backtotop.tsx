"use client"
import { useState } from "react";
import { useEffect } from "react";

export default function BacktoTop() {
    
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = typeof window !== "undefined" ? document.documentElement.scrollTop : 0;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisible);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", toggleVisible);
      }
    };
  }, []);

  
  return (
    <button className="bktop-btn" aria-label="Back to Top" onClick={scrollToTop} style={{ opacity: visible ? 1 : 0 }}> 
      <span className="icon-up"></span>
    </button>
    )

}