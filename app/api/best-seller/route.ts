import { bestSeller } from '@/app/lib/nyt';
import { NextResponse } from 'next/server'
 
export async function GET() {
 
  try {  
  const res = await bestSeller();
    if (!res.ok) {
      throw new Error('Failed to fetch data'); // Handle this error appropriately
    }
  const data  = await res.json();
  const books= data.results.books.slice(0, 10).map((book:any) => ({
    rank:book.rank,
    title:book.title,
    author:book.author,
    description:book.description,
    cover:book.book_image,
    isbn13:book.primary_isbn13,
  }));
   const mDate = data.last_modified;
 

 
  return NextResponse.json({books, mDate})
  }
  catch (error :any) {
    // Handle the error appropriately, log it, and return an error response
    console.error('An error occurred:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
