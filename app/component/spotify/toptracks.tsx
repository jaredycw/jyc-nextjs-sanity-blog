"use client"
import useSWR, { preload } from 'swr';
import { SpotifyTrack } from '@/app/lib/type';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function TopTracks(){

  const fetcher = (url:string) => fetch(url).then((r) => r.json());
  const { data: topTracks, isLoading} = useSWR('/api/top-tracks', fetcher)

    if (isLoading) return <div>Loading...</div>
   
    return (
 
        <div>
          <>
          {console.log('Top Tracks is', topTracks)}
          </>

            <div className="top-tracks">
              <h1 className="uppercase font-bold">Top 10 Tracks</h1>
              {topTracks.tracks ? (
                  topTracks.tracks?.map((track: SpotifyTrack, index: number) => (
                    <Link href={track.songUrl} target="_blank" className="flex flex-wrap items-center p-6 now-playing my-5" key={index}>
                      <div className="flex-none w-14 ml-5"><h1>{index + 1}</h1></div>
                      <div className="flex-initial flex-wrap ml-5">
                        <img
                        className='w-20 shadow-sm'
                        src={track.coverImage.url}
                        alt={track.title}
                        width={100}
                        height={100}
                        key={index}
                        />
                      </div>
                      <div className='flex-1 flex-wrap ml-10'>
                      <h1 className="fw-bold">
                          {track.title}
                      </h1>
                      <h5>
                        {track.artist}
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
