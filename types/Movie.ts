import { PortableTextBlock } from "sanity"

export type Movie = {
    _id: string,
    publishedOn: Date,
    title: string,
    slug: string,
    author: string,
    poster: string,
    director: string,
    genre: string,
    duration: string,
    year: string,
    list: string,
    estimatedReadingTime: string,
    content: PortableTextBlock[];
}