"use client"
import useSWR, { preload } from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function MovieReviewsPart(){

  const fetcher = (url:string) => fetch(url).then((r) => r.json());
  const { data: topArticles, isLoading, error} = useSWR('/api/movie-reviews', fetcher)

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Refresh Too Fast...</div>
    return (
 

    
            <div className="top-articles mt-10">
              <h1 className="uppercase font-bold">Movie Reviews</h1>
              <p>Data provided by The New York Times</p>
              <div className="grid grid-cols-2 gap-10">
              {topArticles.articles ? (
                  topArticles.articles?.map((article, index: number) => (
                    <Link href={article.url} target="_blank" key={index}>
                    <div className="post-wrapper flex flex-col h-full">
                    <div>
                      <img
                      className="post-wrapper-img"
                      src={`http://nytimes.com/${article.cover}`}
                      alt={article.title}
                      />
                    </div>

                    <div className="p-5">
                        <p className="jy-font-sans font-bold ">
                            {article.title}
                        </p>
                        <p className="jy-font-sans">
                        - {article.byline}
                        </p>
                        <div>
                        <p>{article.abstract}</p>
                        </div>
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
