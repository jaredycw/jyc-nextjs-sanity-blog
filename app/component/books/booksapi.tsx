"use client"
import { useState, useEffect} from 'react';
import { useRef } from 'react';
import React from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
 


export default function BooksApiExample(props) {
  

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
  }, []);

   
  return (
    <div className="googleBooks">
    <h2 className="mb-5">Google Books Results </h2>
    <div className="grid grid-cols-5 gap-20 items-center">
      
      {books.slice(0,5).map((item, index) => (
        <div key={index}>
          <div>
            
            
            <Link href={item.volumeInfo.canonicalVolumeLink} key={item.id} target="_blank">
              
            {item.volumeInfo.imageLinks ? (
                  <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} width={100} height={100} loading="lazy" />
                ) : null}
            <p className="text-xs my-5">{item.volumeInfo.title}</p>
               
              
              
            </Link>
            
          </div>
        </div>
      ))}
    </div>
      
    </div>
  );

}