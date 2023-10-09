import { popularArticle } from '@/app/lib/nyt';
import { NextResponse } from 'next/server'
 
export async function GET() {
 
  try {
  const res = await popularArticle();
    if (!res.ok) {
        throw new Error('Failed to fetch data'); // Handle this error appropriately
    }
  const data  = await res.json();
  const articles = data.results.slice(0, 10).map((article: any) => ({
    id: article.id,
    url: article.url,
    title: article.title,
    byline: article.byline,
    abstract: article.abstract,
    cover: article.media[0]?.['media-metadata'][2]?.url || '/',
  }));
 

 
  return NextResponse.json({articles})
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