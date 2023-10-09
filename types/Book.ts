import { PortableTextBlock } from "sanity"


export type Book = {
    _id: string,
    publishedOn: string,
    title: string,
    bookAuthor: string,
    author: string,
    genre: string,
    page: string,
    year: string,
    list: string,
    slug: string,
    cover: string,
    lqip: string,
    mainImage: string,
    categories: string,
    estimatedReadingTime: string,
    googleBooks:string,
    content: PortableTextBlock[];
}
