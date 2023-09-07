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
            <h1 className="uppercase font-bold">Top 10 Artists</h1>
              {topArtists.artists ? ( 
                    topArtists.artists?.map((artist: SpotifyArtist, index: number) => (
                      <Link href={artist.url} target="_blank" className="flex flex-wrap items-center p-6 now-playing my-5" key={index}>
                        <div className="flex-none w-14 ml-5"><h1>{index + 1}</h1></div>
                        <div className="flex-initial flex-wrap ml-5">
                          <Image
                          className='w-20 shadow-sm'
                          src={artist.coverImage.url}
                          alt={artist.name}
                          width={100}
                          height={100}
                          key={index}
                          />
                        </div>
                        <div className='flex-1 flex-wrap ml-10'>
                        <h1 className="fw-bold">
                            {artist.name}
                        </h1>
                        <h5>
                            <span className="mr-10">Popularity: {artist.popularity}</span>  <span className="capitalize">Genre: {artist.genre} </span>
                        </h5>
                      </div>
                      <div className='flex-none w-25 p-5 uppercase text-gray-400'>- Spotify - </div>
                      </Link>
                    ))
                  ) : (
                    <>Failed</>
              )}

            </div>


        </div>
      
    )

}
