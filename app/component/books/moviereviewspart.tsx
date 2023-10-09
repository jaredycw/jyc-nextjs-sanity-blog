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
              <h1>Movie Reviews</h1>
              <p>Data provided by The New York Times (Cache:a Day ago)</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {topArticles.articles ? (
                  topArticles.articles?.map((article : any, index: number) => (
                    <Link href={article.url} target="_blank" key={index}>
                    <div className="post-wrapper flex flex-col h-full">
                    <div>
                      <Image
                      className="post-wrapper-img"
                      src={`http://nytimes.com/${article.cover}`}
                      alt={article.title}
                      width={600}
                      height={400}
                      />
                    </div>

                    <div className="p-7 md:p-6">
                        <p className="jy-font-sans font-bold m-0">
                            {article.title}
                        </p>
                        <p className="jy-font-sans mb-5">
                        - {article.byline}
                        </p>
                        <div>
                        <p className="leading-6">{article.abstract}</p>
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
