import { getCourses } from '@/sanity/sanity-utils';
import { Course } from '@/types/Course';

import { getBooks } from '@/sanity/sanity-utils';
import { Book } from '@/types/Book';

import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

export default async function HobbySection() {
    const courses = await getCourses();
    const books = await getBooks();

  return (
    <div className="grid grid-cols-1 gap-0 xl:grid-cols-2 hobby-border">

              <div>
                <div className="hobby-title">Recent Reading</div>
                
                      
                          {books.map((book) => (
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-10 mb-20" key={book._id} >

                                <div className="book m-auto">
                                  <Link href={`/books/${book.slug}`} key={book._id}>
                                    <div className="book-name">
                                      {book.title}
                                    </div>
                                    <div className="book-author">{book.bookAuthor}</div>
                                  </Link>
                                </div>
                                <div className="book-cover">
                                <Link href={`/books/${book.slug}`} key={book._id}>
                                    {book.cover && (<Image src={book.cover} alt={book.title} width={200} height={270} loading="lazy" className="post-wrapper-img" blurDataURL={book.lqip} placeholder='blur'/>)}
                                </Link>
                                </div>
                    
                            </div>
                               ))}
                            

              </div>

              <div className="ml-0 py-0 xl:ml-10">
                <div className="hobby-title">Recent Studying</div>
                <div className="study-list-wrapper mx-0 xl:mx-10">
                         <ul className="study-list my-20 pb-10 xl:mt-10 xl:py-10">
                         {courses.map((course) =>(
                          <Link href={course.link} key={course._id} target="_blank">
                            <li key={course._id}>{course.title}</li>
                          </Link>
                         ))}
                         </ul>
                    </div>
              </div>

    </div>
  );
}