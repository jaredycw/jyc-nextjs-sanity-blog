"use client"
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

 
export default function NowPlaying(){

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data: nowPlaying, isLoading } = useSWR('/api/now-playing', fetcher)
    if (isLoading) return <div>Loading...</div>
   
    return (
 
        <div>
          <>
          {console.log('Now Playing is', nowPlaying)}
          </>

            <div className="now-playing-section">
              <h1 className="uppercase font-bold">Now Playing</h1>
              <Link href={
                nowPlaying?.isPlaying
                  ? nowPlaying.songUrl
                  : "https://open.spotify.com/user/1282995638"
                }
                target="_blank"
                className="flex flex-wrap items-center p-6 now-playing"
                >
                {nowPlaying?.isPlaying ? (
                  <Image
                    className='w-20 shadow-sm'
                    src={nowPlaying?.albumImageUrl}
                    alt={nowPlaying?.album}
                    width={100}
                    height={100}
                  />
                ) : (
                  <><span className="icon-music text-7xl"></span></>
                )}
                <div className='flex-1 flex-wrap pl-5'>
                  <h1 className="fw-bold">
                      {nowPlaying?.isPlaying ? nowPlaying.title : "Probably Sleeping or Working"}
                  </h1>
                  <h5>
                    {nowPlaying?.isPlaying ? nowPlaying.artist : "Not Listening - Jared Yeung's Life"}
                  </h5>
                </div>
                <div className='flex-none w-25 p-5 uppercase text-gray-400'>- Spotify - </div>
              
              </Link>

          </div>

        </div>
      
    )

}
