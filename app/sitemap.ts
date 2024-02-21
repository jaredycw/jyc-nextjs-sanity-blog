import { MetadataRoute } from 'next'
import { getArchivePosts } from '@/sanity/sanity-utils' ;
import { getArchiveWorks } from '@/sanity/sanity-utils';
import { getArchiveExps } from '@/sanity/sanity-utils';
import { getCategories } from '@/sanity/sanity-utils';
import { getSkills } from '@/sanity/sanity-utils';
import { getIndustries } from '@/sanity/sanity-utils';

export default async function Sitemap() {

    const allPosts = await getArchivePosts();
    const allWorks = await getArchiveWorks();
    const allExps = await getArchiveExps();
    const allCats = await getCategories();
    const allSkills = await getSkills();
    const allIndustries = await getIndustries();

    const posts = allPosts.map((post : any) => ({
      url: `https://jaredyeung.com/posts/${post.slug}`,
      lastModified: post._updatedAt,
    }));

    const works = allWorks.map((work : any) => ({
        url: `https://jaredyeung.com/works/${work.slug}`,
        lastModified: work._updatedAt,
      }));

    const exps = allExps.map((exp : any) => ({
      url: `https://jaredyeung.com/experiments/${exp.slug}`,
      lastModified: exp._updatedAt,
    })); 

    const cats = allCats.map((cat : any) => ({
      url: `https://jaredyeung.com/categories/${cat.slug}`,
      lastModified: cat._updatedAt,
    })); 

    const skills = allSkills.map((skill : any) => ({
      url: `https://jaredyeung.com/skills/${skill.slug}`,
      lastModified: skill._updatedAt,
    })); 

    const industries = allIndustries.map((industry : any) => ({
      url: `https://jaredyeung.com/skills/${industry.slug}`,
      lastModified: industry._updatedAt,
    })); 
    


  return [
    {
      url: 'https://jaredyeung.com',
      lastModified: new Date(),
    },
    {
      url: 'https://jaredyeung.com/about',
      lastModified: new Date(),
    },
    {
        url: 'https://jaredyeung.com/contact',
        lastModified: new Date(),
    },
    {
        url: 'https://jaredyeung.com/fetching',
        lastModified: new Date(),
    },
    {
      url: 'https://jaredyeung.com/posts',
      lastModified: new Date(),
    },
    {
        url: 'https://jaredyeung.com/works',
        lastModified: new Date(),

    },
    {
        url: 'https://jaredyeung.com/experiments',
        lastModified: new Date(),

    },
    {
        url: 'https://jaredyeung.com/categories',
        lastModified: new Date(),

    },
    {
        url: 'https://jaredyeung.com/skills',
        lastModified: new Date(),

    },
    {
        url: 'https://jaredyeung.com/industries',
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
