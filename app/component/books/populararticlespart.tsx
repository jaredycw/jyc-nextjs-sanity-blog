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
 
              <h1 className="uppercase font-bold">Top 10 Articles</h1>
              <p>Data provided by The New York Times</p>
              <div className="grid grid-cols-4 gap-5">
              {topArticles.articles ? (
                  topArticles.articles?.map((article, index: number) => (
                    <Link href={article.url} target="_blank" className="transition hover:-translate-y-1 hover:scale-25" key={article.id}>
                    <div className="post-wrapper flex flex-col h-full">
                      <img
                      className='post-wrapper-img'
                      src={article.cover}
                      alt={article.title}
                      height="100%"
                      key={article.id}
                      />
                    
                    <div className="p-5">
                      <p className="jy-font-sans font-bold">
                          {article.title}
                      </p>
                      <p className="jy-font-sans">
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
