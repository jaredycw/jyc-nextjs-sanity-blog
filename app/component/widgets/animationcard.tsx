"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logoA from '../../images/svg/logo-a.svg'
import logoB from '../../images/svg/logo-b.svg'

export default function AnimationCard({ media1 , media2, height }:any) {
  const mediaItems = [
    {
      src: media1,
      alt: 'Visual',
    },
    {
      src: media2,
      alt: 'Visual',
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
     <>
      {isImage && (
        <Image
          className='hero-image'
          style={{ height: `${height}`, background:'var(--jy-black)' }}
          src={currentMediaItem.src}
          alt={currentMediaItem.alt}
          loading="lazy"
          width={400}
          height={600}
        />
      )}
      {isVideo && (
        <video
          className='hero-image'
          style={{ height: `${height}`, background:'var(--jy-black)' }}
          src={currentMediaItem.src}
          autoPlay
          playsInline
          loop
          muted
        />
      )}
      <div className="logo-svg-a">
        <Image src={logoA} width={25} height={25} alt="Logo SVG A" />
      </div>
      <div className="logo-svg-b">
        <Image src={logoB} width={25} height={25} alt="Logo SVG B"  />
      </div>     
    </>
    
  );
}