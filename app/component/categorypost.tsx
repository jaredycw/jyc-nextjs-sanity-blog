"use client"

import { useState } from "react"
import Link from 'next/link';
import Image from 'next/image';
 


export default function CategoryPost({ posts }: any) {
    
 
      const [ postNum, setPostNum] = useState(6); // Default number of posts dislplayed

      function handleClick() {
        setPostNum(prevPostNum => prevPostNum + 6) // 6 is the number of posts you want to load per click
      }

      const hasMorePosts = postNum < posts.length; // Check if there are more posts to load
    

  return (
    <>
          
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
                {posts.slice(0, postNum).map((post: any) =>(
                            <Link href={`/posts/${post.slug}`} key={post._id}>
                                <div className="post-wrapper">
                                  <div className="thumbnail">{post.mainImage !== null ? (
                        <Image src={post.mainImage} alt={post.title} width={400} height={250} className="post-wrapper-img"
                        blurDataURL={post.lqip} placeholder="blur"
                        />
                        ) : (
                            <Image
                              src="https://cdn.sanity.io/images/mrzc8peh/production/33310bca93339ace486b6d58c50f461ee81e04f4-6000x4000.jpg"
                              alt="Default photo"
                              width={400}
                              height={250}
                              className="post-wrapper-img"
                              blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAMEAQUI/8QAHxAAAgICAgMBAAAAAAAAAAAAAQIAAwQRBRIhIjFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAASH/2gAMAwEAAhEDEQA/APMdQBOjLWIqrsEGTpUFLCfwbEU+7EMfGjEJEeYgxJNmFj2XdkrXbMNAS54nKx1Z7KyFA+yXH5T4790PsJts5bItrZHbakahpjpyhBicM57GIh//2Q=="
                              placeholder="blur"
                            />
                          )}</div>
                                      <div className="post-meta">
                                          <div className="post-title">{post.title}</div>                   
                                          <div className="post-date">{post.publishedOn}</div>
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
}