import { bestSeller } from '@/app/lib/nyt';
import { NextResponse } from 'next/server'
 
export async function GET() {
 
  
  const res = await bestSeller();
  const data  = await res.json();
  const books= data.results.books.slice(0, 10).map((book) => ({
    rank:book.rank,
    title:book.title,
    author:book.author,
    description:book.description,
    cover:book.book_image,
    isbn13:book.primary_isbn13,
  }));
 

 
  return NextResponse.json({books})
}