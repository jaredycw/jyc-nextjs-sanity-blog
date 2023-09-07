import { popularArticle } from '@/app/lib/nyt';
import { NextResponse } from 'next/server'
 
export async function GET() {
 
  
  const res = await popularArticle();
  const data  = await res.json();
  const articles = data.results.slice(0, 10).map((article) => ({
    id: article.id,
    url: article.url,
    title: article.title,
    byline: article.byline,
    abstract: article.abstract,
    cover: article.media[0]['media-metadata'][2].url,
  }));
 

 
  return NextResponse.json({articles})
}