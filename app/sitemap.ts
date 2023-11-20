import { MetadataRoute } from 'next'
import { getPosts } from '@/sanity/sanity-utils' ;
import { getWorks } from '@/sanity/sanity-utils';
import { getExps } from '@/sanity/sanity-utils';

export default async function Sitemap() {

    const allPosts = await getPosts();
    const allWorks = await getWorks();
    const allExps = await getExps();

    const posts = allPosts.map((post : any) => ({
      url: `https://www.jaredyeung.com/posts/${post.slug}`,
      lastModified: post._updatedAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    const works = allWorks.map((work : any) => ({
        url: `https://www.jaredyeung.com/works/${work.slug}`,
        lastModified: work._updatedAt,
        changeFrequency: 'weekly',
        priority: 0.8,
      }));

    const exps = allExps.map((exp : any) => ({
      url: `https://www.jaredyeung.com/experiments/${exp.slug}`,
      lastModified: exp._updatedAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    }));  


  return [
    {
      url: 'https://www.jaredyeung.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.jaredyeung.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
        url: 'https://www.jaredyeung.com/contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://www.jaredyeung.com/fetching',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
      url: 'https://www.jaredyeung.com/posts',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
        url: 'https://www.jaredyeung.com/works',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
    },
    {
        url: 'https://www.jaredyeung.com/experiments',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
    },
    {
        url: 'https://www.jaredyeung.com/categories',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.3,
    },
    {
        url: 'https://www.jaredyeung.com/skills',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.3,
    },
    {
        url: 'https://www.jaredyeung.com/industries',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.3,
    },
    ...posts,
    ...works,
    ...exps
  ]
  
}
