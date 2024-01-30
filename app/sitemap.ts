import { MetadataRoute } from 'next'
import { getPosts } from '@/sanity/sanity-utils' ;
import { getWorks } from '@/sanity/sanity-utils';
import { getExps } from '@/sanity/sanity-utils';
import { getCategories } from '@/sanity/sanity-utils';
import { getSkills } from '@/sanity/sanity-utils';
import { getIndustries } from '@/sanity/sanity-utils';

export default async function Sitemap() {

    const allPosts = await getPosts();
    const allWorks = await getWorks();
    const allExps = await getExps();
    const allCats = await getCategories();
    const allSkills = await getSkills();
    const allIndustries = await getIndustries();

    const posts = allPosts.map((post : any) => ({
      url: `https://www.jaredyeung.com/posts/${post.slug}`,
      lastModified: post._updatedAt,
    }));

    const works = allWorks.map((work : any) => ({
        url: `https://www.jaredyeung.com/works/${work.slug}`,
        lastModified: work._updatedAt,
      }));

    const exps = allExps.map((exp : any) => ({
      url: `https://www.jaredyeung.com/experiments/${exp.slug}`,
      lastModified: exp._updatedAt,
    })); 

    const cats = allCats.map((cat : any) => ({
      url: `https://www.jaredyeung.com/categories/${cat.slug}`,
      lastModified: cat._updatedAt,
    })); 

    const skills = allSkills.map((skill : any) => ({
      url: `https://www.jaredyeung.com/skills/${skill.slug}`,
      lastModified: skill._updatedAt,
    })); 

    const industries = allIndustries.map((industry : any) => ({
      url: `https://www.jaredyeung.com/skills/${industry.slug}`,
      lastModified: industry._updatedAt,
    })); 
    


  return [
    {
      url: 'https://www.jaredyeung.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.jaredyeung.com/about',
      lastModified: new Date(),
    },
    {
        url: 'https://www.jaredyeung.com/contact',
        lastModified: new Date(),
    },
    {
        url: 'https://www.jaredyeung.com/fetching',
        lastModified: new Date(),
    },
    {
      url: 'https://www.jaredyeung.com/posts',
      lastModified: new Date(),
    },
    {
        url: 'https://www.jaredyeung.com/works',
        lastModified: new Date(),

    },
    {
        url: 'https://www.jaredyeung.com/experiments',
        lastModified: new Date(),

    },
    {
        url: 'https://www.jaredyeung.com/categories',
        lastModified: new Date(),

    },
    {
        url: 'https://www.jaredyeung.com/skills',
        lastModified: new Date(),

    },
    {
        url: 'https://www.jaredyeung.com/industries',
        lastModified: new Date(),

    },
    ...posts,
    ...works,
    ...exps,
    ...cats,
    ...skills,
    ...industries,
  ]
  
}
