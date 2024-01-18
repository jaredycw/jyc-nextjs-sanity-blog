"use client"
import { useState, useEffect} from 'react';
import { useRef } from 'react';
import React from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
 


export default function BooksApiExample(props :any) {
  

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const target = props.bookname;
        target.replace(/\s+/g, '');
        const link = "https://www.googleapis.com/books/v1/volumes?q=" + target;
        const response = await axios({method:'get', url:link, timeout: 5000});
        setBooks(response.data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

   
  return (
    <div className="googleBooks">
    <h2 className="mb-5 leading-3">Google Books Results </h2>
    <p className="mb-5">Powered by Google Books API</p>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-20 items-center justify-items-center md:justify-items-start">
      
      {books.slice(0,5).map((item : any, index : number) => (
        <div key={index}>
            <Link href={item.volumeInfo.canonicalVolumeLink} key={item.id} target="_blank">
            {item.volumeInfo.imageLinks ? (
                  <Image src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} width={150} height={100} loading="lazy" />
                ) : null}
            <p className="text-xs my-5 text-center md:text-left">{item.volumeInfo.title}</p>         
              
            </Link>
            
        </div>
      ))}
    </div>
      
    </div>
  );

}