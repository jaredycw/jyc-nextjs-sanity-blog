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
              <h1>Top 10 Non Fiction Books (Combined Print & E-book)</h1>
              <p>Data provided by The New York Times (Last Modifited Date:  {topBooks.mDate})</p>
              {topBooks.books ? (
                  topBooks.books?.map((book :any, index: number) => (
                    <div className="flex flex-wrap flex-col md:flex-row items-center p-6 article-sample my-5" key={book.isbn13}>
                    <div className="flex-none w-14 ml-0 md:ml-5 mb-5 md:mb-0"><h2 className="text-center md:text-left">{index + 1}</h2></div>
                    <div className="flex-none ml-0 md:ml-5 mb-5 md:mb-0">
                      <Image
                      className='shadow-sm'
                      src={book.cover}
                      alt={book.title}
                      width={100}
                      height={100}
                      key={index}
                      />
                    </div>
                    <div className='flex-1 flex-wrap ml-0 md:ml-10'>
                    <h2 className="fw-bold text-center md:text-left">
                        {book.title}
                    </h2>
                    <p className="text-center md:text-left jy-font-sans font-bold text-xl text-gray-500 ">
                      {book.author}
                    </p>
                  </div>
                  <div className='flex-none w-25 pt-10 md:p-5 uppercase text-gray-500'>- NYT - </div>
                  </div>
                  ))
                ) : (
                  <>Failed</>
              )}
            </div>

 
    )

}
