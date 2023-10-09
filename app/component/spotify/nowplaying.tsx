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
              <h1>Now Playing</h1>
              <Link href={
                nowPlaying?.isPlaying
                  ? nowPlaying.songUrl
                  : "https://open.spotify.com/user/1282995638"
                }
                target="_blank"
                className="flex flex-wrap flex-col md:flex-row items-center p-6 now-playing"
                >
                {nowPlaying?.isPlaying ? (
                  <div className="flex-none ml-0 md:ml-5 mb-5 md:mb-0">
                  <Image
                    className='shadow-sm'
                    src={nowPlaying?.albumImageUrl}
                    alt={nowPlaying?.album}
                    width={100}
                    height={100}
                  />
                  </div>
                ) : (
                  <div className="flex-none ml-0 md:ml-5 mb-5 md:mb-0"><span className="icon-music text-7xl "></span></div>
                )}
                <div className='flex-1 flex-wrap ml-0 md:ml-10'>
                  <h1 className="fw-bold text-center md:text-left">
                      {nowPlaying?.isPlaying ? nowPlaying.title : "Probably Sleeping or Working"}
                  </h1>
                  <h5 className="text-center md:text-left">
                    {nowPlaying?.isPlaying ? nowPlaying.artist : "Not Listening - Jared Yeung's Life"}
                  </h5>
                </div>
                <div className='flex-none w-25 pt-10 md:p-5 uppercase text-gray-400'>- Spotify - </div>
              
              </Link>

          </div>

        </div>
      
    )

}
