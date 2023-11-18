"use client"
import useSWR, { preload } from 'swr';
import { SpotifyTrack } from '@/app/lib/type';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function NewReleases(){

  const fetcher = (url:string) => fetch(url).then((r) => r.json());
  const { data: newReleases, isLoading} = useSWR('/api/new-releases', fetcher)

    if (isLoading) return <div>Loading...</div>
   
    return (
 
        <div>
          <>
          {console.log('New Releases Albums ...', newReleases)}
          </>

            <div className="top-tracks">
              <h1>New Releases in Hong Kong Market</h1>

              {newReleases.tracks ? (
                  newReleases.tracks?.map((track: SpotifyTrack, index: number) => (
                    <Link href={track.songUrl} target="_blank" className="flex flex-wrap flex-col md:flex-row items-center p-6 article-sample my-5" key={index}>
                      <div className="flex-none w-14 ml-0 md:ml-5 mb-5 md:mb-0"><h2 className="text-center md:text-left">{index + 1}</h2></div>
                      <div className="flex-none ml-0 md:ml-5 mb-5 md:mb-0">
                        <Image
                        className='shadow-sm'
                        src={track.coverImage.url}
                        alt={track.title}
                        width={100}
                        height={100}
                        key={index}
                        />
                      </div>
                      <div className='flex-1 flex-wrap ml-0 md:ml-10'>
                      <h2 className="fw-bold text-center md:text-left">
                          {track.title}
                      </h2>
                      <p className="text-center md:text-left jy-font-sans font-bold text-xl text-gray-500 ">
                        {track.artist}
                      </p>
                    </div>
                    <div className='flex-none w-25 pt-10 md:p-5 uppercase text-gray-500 text-center'>- Spotify -
                    <p className='jy-font-sans text-center'>- {track.releasedDate} -</p>
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
