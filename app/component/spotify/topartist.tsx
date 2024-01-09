"use client"
import useSWR from 'swr';
import {SpotifyArtist } from '@/app/lib/type';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

 
export default function TopArtists(){

  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const { data: topArtists, isLoading } = useSWR('/api/top-artists', fetcher)


    if (isLoading) return <div>Loading...</div>
   
    return (
 
        <div>
          <>
          </>
 
            <div className="top-artists">
            <h1>Top 10 Artists</h1>
            <span>(Approximately last 4 weeks)</span>
              {topArtists.artists ? ( 
                    topArtists.artists?.map((artist: SpotifyArtist, index: number) => (
                      <Link href={artist.url} target="_blank" className="flex flex-wrap flex-col md:flex-row items-center p-6 article-sample my-5" key={index}>
                        <div className="flex-none w-14 ml-0 md:ml-5 mb-5 md:mb-0"><h2 className="text-center md:text-left">{index + 1}</h2></div>
                        <div className="flex-none ml-0 md:ml-5 mb-5 md:mb-0">
                        {artist.coverImage && artist.coverImage.url ? (
                          <Image
                            className="shadow-sm"
                            src={artist.coverImage.url}
                            alt={artist.name}
                            width={100}
                            height={100}
                            key={index}
                          />
                        ) : null}
                        </div>
                        <div className='flex-1 flex-wrap ml-0 md:ml-10'>
                        <h2 className="fw-bold text-center md:text-left">
                            {artist.name}
                        </h2>
                        <div className="text-center md:text-left my-5 md:my-1">
                            <p className="mr-0 md:mr-10 capitalize blcok md:inline text-center md:text-left jy-font-sans font-bold text-xl text-gray-500">Popularity: {artist.popularity}</p> 
                            <p className="capitalize blcok md:inline text-center md:text-left jy-font-sans font-bold text-xl text-gray-500">Genre: {artist.genre} </p>
                        </div>
                      </div>
                      <div className='flex-none w-25 pt-10 md:p-5 uppercase text-gray-500'>- Spotify - </div>
                      </Link>
                    ))
                  ) : (
                    <>Failed</>
              )}

            </div>


        </div>
      
    )

}
