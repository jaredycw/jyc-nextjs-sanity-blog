"use client"
import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url';
import {getImageDimensions} from '@sanity/asset-utils'
import Image from 'next/image';
import Link from 'next/link';
import { InstagramEmbed } from 'react-social-media-embed';
import { YouTubeEmbed } from 'react-social-media-embed';
 
 
export default function PortableContent(props:any) {


// Barebones lazy-loaded image component
const SampleImageComponent = ({value, isInline}:any) => {
  const {width, height} = getImageDimensions(value)

  if (value.size == "fullwidth"){
  return (
    
    <div className="my-10">

    <Image
      src={urlBuilder()
          .image(value)
          .projectId('mrzc8peh')
          .dataset('production')
          .auto('format')
          .fit('max')
          .url()}
          width={3840}
          height={2160}
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
    <p className="text-center text-gray-400 my-3 image-caption">{value.caption}</p>
    </div>
    
  )
  }
  else{
    return<div className="grid grid-flow-col">
      <div></div>
      <div>
        <Image
          src={urlBuilder()
              .image(value)
              .projectId('mrzc8peh')
              .dataset('production')
              .auto('format')
              .fit('max')
              .url()}
              width={600}
              height={400}
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
      <p className="text-center text-gray-400 my-3 image-caption">{value.caption}</p>
      </div>
      <div></div>
  </div>
 
  }

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

const editLink = ({value, children}:any)  =>{
  const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <><span className="icon-link mr-1"></span>
        <a href={value.href} target={target}>
         {children}
        </a>
        </>
      )
}

const editHeading = (children: any): any => {
  if (typeof children === "string") {
    return children.toLowerCase().replace(/ /g, "-");
  } else if (Array.isArray(children)) {
    return children.map((child) =>
      typeof child === "string" ? child.toLowerCase().replace(/ /g, "-") : child
    );
  }
  return children;
};
const editH1 = ({children}: any) => {
  const lowercaseChildren = editHeading(children);

  return (
    <h1 id={lowercaseChildren}>
      {children}
    </h1>
  );
};

const editH2 = ({children}: any) => {
  const lowercaseChildren = editHeading(children);

  return (
    <h2 id={lowercaseChildren}>
      {children}
    </h2>
  );
};

const editH3 = ({children}: any) => {
  const lowercaseChildren = editHeading(children);

  return (
    <h3 id={lowercaseChildren}>
      {children}
    </h3>
  );
};

const editH4 = ({children}: any) => {
  const lowercaseChildren = editHeading(children);
  return (
    <h4 id={lowercaseChildren}>
      {children}
    </h4>
  );
};
const editH5 = ({children}: any) => {
  const lowercaseChildren = editHeading(children);

  return (
    <h5 id={lowercaseChildren}>
      {children}
    </h5>
  );
};
const editH6 = ({children}: any) => {
  const lowercaseChildren = editHeading(children);

  return (
    <h6 id={lowercaseChildren}>
      {children}
    </h6>
  );
};



const components = {
  types: {
    image: SampleImageComponent,
    youtube: SampleYouTubeComponent,
    instagramPost: InstagramComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
  marks:{
    link: editLink,
  },
  block:{
    h1: editH1,
    h2: editH2,
    h3: editH3,
    h4: editH4,
    h5: editH5,
    h6: editH6,
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
