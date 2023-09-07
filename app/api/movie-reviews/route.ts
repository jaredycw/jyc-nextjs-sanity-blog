import { movieReviews } from '@/app/lib/nyt';
import { NextResponse } from 'next/server'
 
export async function GET() {
 
  
  const res = await movieReviews();
  const data  = await res.json();
  const articles = data.response.docs.slice(0, 10).map((article) => ({
    url: article.web_url,
    title: article.headline.main,
    date: article.pub_date,
    abstract: article.abstract,
    byline: article.byline.original,
    cover:article.multimedia[0].url,
  }));
 

 
  return NextResponse.json({articles})
}