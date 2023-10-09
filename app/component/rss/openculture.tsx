"use client"
import useSWR, { preload } from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';


export default function OpenCulturePart(){
    const fetcher = (url:string) => fetch(url).then((r) => r.json());
    const { data: latestArticles, isLoading} = useSWR('/api/rss/open-culture', fetcher)
  
      if (isLoading) return <div>Loading...</div>

    return(
            <div className="top-news mt-10">
              <h1>Latest News From Open Culture</h1>
              <p>Data provided by Open Culture(Cache: A day ago) </p>

              {latestArticles.articles ? (
                  latestArticles.articles?.map((article :any, index: number) => (
                    <Link href={article.url || "/404/"} target='_blank' key={index}>
                    <div className="flex flex-wrap flex-col md:flex-row items-center p-6 article-sample my-5">
                    <div className="flex-none w-14 ml-0 md:ml-5 mb-5 md:mb-0"><h1 className="text-center md:text-left">{index + 1}</h1></div>

                    <div className='flex-1 flex-wrap ml-0 md:ml-10'>
                    <h5 className="text-center md:text-left break-words">
                        {article.title}
                    </h5>
                    <h6 className="text-center md:text-left break-words my-5 md:my-2">
                      By: {article.author}
                    </h6>
                    <div className="text-center md:text-left my-5 md:my-2">
                            <p className="mr-0 md:mr-10 capitalize blcok md:inline text-center md:text-left">Category: {article.category}</p> 
                        </div>
                  </div>
                  <div className='flex-none w-25 pt-10 md:p-5 uppercase text-gray-400'>- Open Culture - </div> 
                  </div>
                  </Link>
                  ))
                ) : (
                  <>Failed</>
              )}
            </div>
    )
}