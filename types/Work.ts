import { PortableTextBlock } from "sanity";
export type Work = {
    _id: string,
    publishedOn: string,
    author:string,
    authorImage:string,
    authorBio:string,
    authorLqip:string,
    title: string,
    slug: string,
    categories: string,
    mainImage: string,
    mainImageAlt:string,
    mainImageCaption:string,
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

