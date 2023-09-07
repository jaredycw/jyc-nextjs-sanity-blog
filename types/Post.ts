import { PortableTextBlock } from "sanity";
export type Post = {
    count: number,
    _id: string,
    publishedOn: Date,
    author:string,
    authorImage:string,
    authorBio:string,
    title: string,
    slug: string,
    categories: string,
    mainImage: string,
    lqip:string,
    contentLqip: string,
    youtubelink: string,
    youtubetitle:string,
    youtubealt:string,
    total:number,
    mainImageAlt: string,
    mainImageCaption: string,
    igpost: string,
    estimatedReadingTime: string,
    content: PortableTextBlock[];
}

