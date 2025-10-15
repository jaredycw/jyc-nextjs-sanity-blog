import { movieReviews } from '@/app/lib/nyt';
import { NextResponse } from 'next/server'
 
export async function GET() {
 
  try{
  const res = await movieReviews();
    if (!res.ok) {
      throw new Error('Failed to fetch data'); // Handle this error appropriately
    }
  const data  = await res.json();
  const articles = data.response.docs.slice(0, 10).map((article:any) => ({
    title: article.headline.main,
    date: article.pub_date,
    abstract: article.abstract,
    byline: article.byline.original,
    cover:article.multimedia[0].url,
  }));
 

 
  return NextResponse.json({articles})
  } catch (error :any) {
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
