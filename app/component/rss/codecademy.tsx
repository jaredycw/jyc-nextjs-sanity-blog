"use client"
import useSWR, { preload } from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';


export default function CodecademyPart(){
    const fetcher = (url:string) => fetch(url).then((r) => r.json());
    const { data: latestArticles, isLoading} = useSWR('/api/rss/codecademy', fetcher)
  
      if (isLoading) return <div>Loading...</div>

    return(
            <div className="top-news mt-10">
              <h1>Latest News From Codecademy</h1>
              <p>Data provided by Codecademy (Cache: A day ago) </p>

              {latestArticles.articles ? (
                  latestArticles.articles?.map((article :any, index: number) => (
                    <Link href={article.url || "/404/"} target='_blank' key={index}>
                    <div className="flex flex-wrap flex-col md:flex-row items-center p-6 article-sample my-5">
                    <div className="flex-none w-14 ml-0 md:ml-5 mb-5 md:mb-0"><h2 className="text-center md:text-left">{index + 1}</h2></div>

                    <div className='flex-1 flex-wrap ml-0 md:ml-10'>
                    <h2 className="text-center md:text-left break-words text-xl">
                        {article.title}
                    </h2>
                    <p className="text-center md:text-left break-words my-5 md:my-2 jy-font-sans font-bold text-xl text-gray-500">
                      By: {article.author}
                    </p>
                  </div>
                  <div className='flex-none w-25 pt-10 md:p-5 uppercase text-gray-500'>- Codecademy - </div> 
                  </div>
                  </Link>
                  ))
                ) : (
                  <>Failed</>
              )}
            </div>
    )
}