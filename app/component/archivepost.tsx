"use client"

import { useState } from "react"
import Link from 'next/link';
import Image from 'next/image';
import { getFormattedDate } from "../lib/date";


export default function ArchivePost({ posts }: any) {
    

      const [ postNum, setPostNum] = useState(9); // Default number of posts dislplayed

      function handleClick() {
        setPostNum(prevPostNum => prevPostNum + 9) // 6 is the number of posts you want to load per click
      }

      const hasMorePosts = postNum < posts.length; // Check if there are more posts to load
    
  if ( posts !== null && posts.length !== 0) {
  return (
    <>
          
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
              
                {posts.slice(0, postNum).map((post: any) =>(
                            <Link href={`/posts/${post.slug}`} key={post._id}>
                                <div className="post-wrapper">
                                  <div className="thumbnail">{post.mainImage !== null ? (
                        <Image src={post.mainImage} alt={post.title} width={600} height={400} className="post-wrapper-img"
                        blurDataURL={post.lqip} placeholder="blur" loading="lazy"
                        />
                        ) : (
                            <Image
                              src="https://cdn.sanity.io/images/mrzc8peh/production/926db6f7d5b119da2e8fa0572415c94880ddf40e-3334x2084.jpg"
                              alt="Default photo"
                              width={600}
                              height={400}
                              loading="lazy"
                              className="post-wrapper-img"
                              blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGQAAAQUAAAAAAAAAAAAAAAAAAAECBAUH/8QAHhAAAgICAwEBAAAAAAAAAAAAAQIAAwURBBJRITH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMLweMfLZBeLXYlZIJ7P+DUkZHBX8Him+22pl7EAKdn5Kmt3rbtWzK3oOorWO2+zsd+mUMhCED//2Q=="
                              placeholder="blur"
                            />
                          )}</div>
                                      <div className="post-meta">
                                          <div className="post-title">{post.title}</div>                   
                                          <div className="post-date">{getFormattedDate(new Date(post.publishedOn))}</div>
                                      </div>
                                </div>
                            </Link>
                    ))}
            </div>
            <div className="explore-wrapper">
                    {hasMorePosts && (
                        <button onClick={handleClick}>Load More</button>
                    )}
            </div>
    </>
  );
  } else {
    return(
      <p>Sorry! There are no post items.</p>
    )
  }  
}