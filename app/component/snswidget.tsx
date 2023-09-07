"use client"
import React from "react";
import Link from "next/link"


export default function SnsWidget() {
    const handleCopyToClipboard = () => {
        const urlToCopy = window.location.href;
        navigator.clipboard.writeText(urlToCopy)
          .then(() => {
            alert("URL copied to clipboard!");
          })
          .catch((error) => {
            console.error("Error copying to clipboard:", error);
          });
      };
    const handlePrint = () => {
        window.print();
      };

    const handleShareToLinkedIn = () => {
        const urlToShare = window.location.href;
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(urlToShare)}`;
        
        window.open(linkedInUrl, "_blank");
    };
    const handleShareToFacebook = () => {
        const urlToShare = window.location.href;
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
        
        window.open(facebookUrl, "_blank");
    };
    
    return (
        <div className="sns-widget-wrapper">
        <ul className="sns-widget">
            <li onClick={handleShareToFacebook}><i className="icon-fb"></i></li>
            <li onClick={handleShareToLinkedIn}><i className="icon-in"></i></li>
            <li onClick={handleCopyToClipboard}><i className="icon-link"></i></li>
            <li onClick={handlePrint}><i className="icon-printer"></i></li>
        </ul>
    </div> 

    )
  }