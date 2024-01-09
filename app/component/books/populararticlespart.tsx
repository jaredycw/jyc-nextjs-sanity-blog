"use client"
import useSWR, { preload } from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function PopularArticlesPart(){

  const fetcher = (url:string) => fetch(url).then((r) => r.json());
  const { data: topArticles, isLoading, error} = useSWR('/api/popular-articles', fetcher)

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Refresh Too Fast...</div>
    return (
 

    
            <div className="top-articles mt-10">
 
              <h1>Top 10 Articles</h1>
              <p>Data provided by The New York Times(Cache:a Day ago)</p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
              {topArticles.articles ? (
                  topArticles.articles?.map((article :any, index: number) => (
                    <Link href={article.url || "/404/"} target="_blank" className="transition hover:-translate-y-1 hover:scale-25" key={article.id}>
                    <div className="post-wrapper flex flex-col h-full">
                      <Image
                      className='post-wrapper-img'
                      src={article.cover}
                      alt={article.title}
                      width={600}
                      height={400}
                      key={article.id}
                      />
                    
                    <div className="p-7 md:p-5">
                      <p className="jy-font-sans font-bold leading-6 mb-2">
                          {article.title}
                      </p>
                      <p className="jy-font-sans font-bold text-sm text-gray-500">
                        {article.byline}
                      </p>
                    </div>
                  </div>
                  </Link>
                  ))
                ) : (
                  <>Failed</>
              )}
              </div>
            </div>

 
    )

}
