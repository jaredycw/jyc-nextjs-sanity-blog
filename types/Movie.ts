import { PortableTextBlock } from "sanity"

export type Movie = {
    _id: string,
    publishedOn: string,
    title: string,
    slug: string,
    author: string,
    authorBio: string,
    authorLqip: string,
    poster: string,
    director: string,
    genre: string,
    duration: string,
    page: string,
    year: string,
    list: string,
    estimatedReadingTime: string,
    lqip:string,
    categories:string,
    authorImage:string,
    content: PortableTextBlock[];
}