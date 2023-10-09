"use client"
import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url';
import {getImageDimensions} from '@sanity/asset-utils'
import Image from 'next/image';
import { InstagramEmbed } from 'react-social-media-embed';
import { YouTubeEmbed } from 'react-social-media-embed';
 
 
export default function PortableContent(props:any) {


// Barebones lazy-loaded image component
const SampleImageComponent = ({value, isInline}:any) => {
  const {width, height} = getImageDimensions(value)
 
  return (
    
    <div className="my-10">
    <Image
      src={urlBuilder()
          .image(value)
          .projectId('mrzc8peh')
          .dataset('production')
          .auto('format')
          .width(isInline ? 100 : 800)
          .fit('max')
          .url()}
          width={1920}
          height={1080}
          alt={value.alt || ' '}
          loading="lazy"
          blurDataURL={value.lqip}
          placeholder="blur"
          style={{
              // Display alongside text if image appears inside a block text span
              display: isInline ? 'inline-block' : 'block',
              // Avoid jumping around with aspect-ratio CSS property
              aspectRatio: width / height,
            }
          }
    />
    <p className="text-center text-gray-400 my-5 image-caption">{value.caption}</p>
    </div>
    
  )
}

const SampleYouTubeComponent = ({value}:any) =>{
   
  return(
    <YouTubeEmbed url={value.youtubelink} width="100%" height={500} />
  )
}

const InstagramComponent = ({value}:any) =>{
  
  return(

    <div style={{ display: 'flex', justifyContent: 'center' }} className="relative">
      <InstagramEmbed  url={value.igpost} width="100%" />
    </div>
  )
}

 
 

const components = {
  types: {
    image: SampleImageComponent,
    youtube: SampleYouTubeComponent,
    instagramPost: InstagramComponent,
 
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
   
  }
}

  return (
    <div className="page-content">
    <PortableText
      value={props.content}
      components={components}
      // Add other props you need for PortableText here
    />
    </div>
    
  );
}
