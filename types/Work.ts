import { PortableTextBlock } from "sanity";
export type Work = {
    _id: string,
    publishedOn: Date,
    author:string,
    title: string,
    slug: string,
    categories: string,
    mainImage: string,
    lqip:string,
    contentLqip: string,
    youtubelink: string,
    youtubetitle:string,
    youtubealt:string,
    industries: string,
    skills: string,
    workingTime: number,
    igpost: string,
    estimatedReadingTime: string,
    content: PortableTextBlock[];
}

