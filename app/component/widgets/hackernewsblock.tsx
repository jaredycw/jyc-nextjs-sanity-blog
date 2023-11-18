"use client"
import useSWR, { preload } from 'swr';
import Link from 'next/link';
import React from 'react';

export default function HackerNewsWidget(){

  const fetcher = (url:string) => fetch(url).then((r) => r.json());
  const { data: topStories, isLoading} = useSWR('/api/top-stories', fetcher)

    if (isLoading) return <div>Loading...</div>
   
    return (
 

    
            <div className="mt-10">
 
              <h1>Top 10 Stories in Hacker News</h1>
              <p>Data provided by Hacker News</p>
              {topStories.stories ? (
                  topStories.stories?.map((story :any, index: number) => (
                    <Link href={story.url || "/404/"} target='_blank' key={story.id}>
                    <div className="flex flex-wrap flex-col md:flex-row items-center p-6 article-sample my-5">
                    <div className="flex-none w-14 ml-0 md:ml-5 mb-5 md:mb-0"><h2 className="text-center md:text-left">{index + 1}</h2></div>

                    <div className='flex-1 flex-wrap ml-0 md:ml-10'>
                    <h2 className="text-center md:text-left break-words">
                        {story.title}
                    </h2>
                    <p className="text-center md:text-left break-words jy-font-sans font-bold text-xl text-gray-500 ">
                      By: {story.by}
                    </p>
                  </div>
                  <div className='flex-none w-25 pt-10 md:p-5 uppercase text-gray-500'>- Hacker News - </div> 
                  </div>
                  </Link>
                  ))
                ) : (
                  <>Failed</>
              )}
            </div>

 
    )

}
