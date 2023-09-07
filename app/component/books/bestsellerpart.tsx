"use client"
import useSWR, { preload } from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function BestSellerPart(){

  const fetcher = (url:string) => fetch(url).then((r) => r.json());
  const { data: topBooks, isLoading} = useSWR('/api/best-seller', fetcher)

    if (isLoading) return <div>Loading...</div>
   
    return (
 

    
            <div className="top-books mt-10">
              {(console.log("Best Fiction is ",topBooks))}
              <h1 className="uppercase font-bold">Top 10 Non Fiction Books</h1>
              <p>Data provided by The New York Times</p>
              {topBooks.books ? (
                  topBooks.books?.map((book, index: number) => (
                    <div className="flex flex-wrap items-center p-6 now-playing my-5" key={book.isbn13}>
                    <div className="flex-none w-14 ml-5"><h1>{index + 1}</h1></div>
                    <div className="flex-initial flex-wrap ml-5">
                      <Image
                      className='w-20 shadow-sm'
                      src={book.cover}
                      alt={book.title}
                      width={100}
                      height={100}
                      key={index}
                      />
                    </div>
                    <div className='flex-1 flex-wrap ml-10'>
                    <h1 className="fw-bold">
                        {book.title}
                    </h1>
                    <h5>
                      {book.author}
                    </h5>
                  </div>
                  <div className='flex-none w-25 p-5 uppercase text-gray-400'>- NYT - </div>
                  </div>
                  ))
                ) : (
                  <>Failed</>
              )}
            </div>

 
    )

}
