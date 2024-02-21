"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logoA from '../../images/svg/logo-a.svg'
import logoB from '../../images/svg/logo-b.svg'

export default function AnimationCard() {
  const mediaItems = [
    {
      src: 'https://cdn.sanity.io/files/mrzc8peh/production/befdaa3d8c566017413f4ced88d3191c4213445a.mp4',
      alt: 'Image',
    },
    {
      src: 'https://cdn.sanity.io/files/mrzc8peh/production/551590d737c555c18b770df2071f2943cbd6c633.mp4',
      alt: 'Video',
    },

  ];

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentMediaIndex + 1) % mediaItems.length;
      setCurrentMediaIndex(nextIndex);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentMediaIndex]);

  const currentMediaItem = mediaItems[currentMediaIndex];
  const isImage = currentMediaItem.src.toLowerCase().endsWith('.jpg');
  const isVideo = currentMediaItem.src.toLowerCase().endsWith('.mp4');


  return (
     <div className="hero-image-wrapper float-right">
      {isImage && (
        <Image
          className='hero-image'
          src={currentMediaItem.src}
          alt={currentMediaItem.alt}
          width={400}
          height={600}
        />
      )}
      {isVideo && (
        <video
          className='hero-image'
          style={{ height: '335px' }}
          src={currentMediaItem.src}
          autoPlay
          loop
        />
      )}
      <div className="logo-svg-a">
        <Image src={logoA} width={25} height={25} alt="Logo SVG A" />
      </div>
      <div className="logo-svg-b">
        <Image src={logoB} width={25} height={25} alt="Logo SVG B"  />
      </div>     
    </div>
    
  );
}