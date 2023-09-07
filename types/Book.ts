import { PortableTextBlock } from "sanity"


export type Book = {
    _id: string,
    publishedOn: Date,
    title: string,
    bookAuthor: string,
    author: string,
    genre: string,
    page: string,
    year: string,
    list: string,
    slug: string,
    cover: string,
    estimatedReadingTime: string,
    googleBooks:string,
    content: PortableTextBlock[];
}