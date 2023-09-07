import { createClient, groq } from "next-sanity";
import { Post } from "@/types/Post";
import { Page } from "@/types/Page";
import { Course } from "@/types/Course";
import { Book } from "@/types/Book";
import { Movie } from "@/types/Movie";
import { Work } from "@/types/Work";
import { Experiment } from "@/types/Exp";
import { Category } from "@/types/Category";
import clientConfig from "./config/client-config";
import { Motto } from "@/types/Motto";
 


export async function getCategories(): Promise<Category[]>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="category"]{
            _id,
            title,
            "slug": slug.current,
            description
        }`
    );
}

export async function getCategory(slug: string): Promise<Category>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="category" && slug.current == $slug][0]{
            title,
            "slug": slug.current,
            description,
            "posts": *[_type == "post" && references(^._id)]| order(_createdAt desc){
            _id,
            publishedOn,
            title,
            "slug": slug.current,
            "mainImage":mainImage.asset->url,
            'lqip': mainImage.asset->metadata.lqip
          }        
        }`,{slug}
    );
}

export async function getPosts(): Promise<Post[]>{ 
 
    return createClient(clientConfig).fetch(

        groq`*[_type=="post"]| order(_createdAt desc)[0..5]{
            _id,
            publishedOn,
            title,
            "slug": slug.current,
            "mainImage":mainImage.asset->url,
            'lqip': mainImage.asset->metadata.lqip
        }`
    );
}

export async function getArchivePosts(): Promise<Post[]>{ 
 
    return createClient(clientConfig).fetch(

        groq`*[_type=="post"]| order(_createdAt desc){
            "count": count(*[_type == "post"]),
            _id,
            publishedOn,
            title,
            "slug": slug.current,
            "mainImage":mainImage.asset->url,
            'lqip': mainImage.asset->metadata.lqip,
            "total":count(*[_type == "post"])
        }`
    );
}

export async function getPost(slug: string): Promise<Post>{

    return createClient(clientConfig).fetch(

        groq`*[_type == "post" && slug.current == $slug][0]{
            _id,
            publishedOn,
            "author": author -> title,
            "authorImage": author ->image.asset-> url,
            'authorLqip': author-> image.asset->metadata.lqip,
            "authorBio": author -> bio,
            title,
            "slug": slug.current,
            "mainImage":mainImage.asset->url,
            "mainImageAlt":mainImage.alt,
            "mainImageCaption":mainImage.caption,
            'lqip': mainImage.asset->metadata.lqip,
            "categories": categories[]->,
            "numberOfCharacters": length(pt::text(content)),
            "estimatedWordCount": round(length(pt::text(content)) / 5),
            "estimatedReadingTime": round(length(pt::text(content)) / 5 / 100 ),
            content[]{
                ...,
                _type == "image" =>{
                  "lqip":@.asset->metadata.lqip
                },
                _type == "youtube" => {
                    "youtubelink":@.url,
                    "youtubetitle":@.title,
                    "youtubealt":@.alt
                },
                _type == "instagramPost" => {
                    "igpost":@.url
                },
                _type == "myCodeField" =>{
                    language,code,filename
                }
            }

        }`,{ slug }
    );

}

export async function getCourses(): Promise<Course>{ 
 

    return createClient(clientConfig).fetch(

        groq`*[_type=="course"][0..2]| order(_createdAt desc){
            _id,
            title,
            link,
        }`
    );
}

export async function getCourse(): Promise<Course>{ 
 

    return createClient(clientConfig).fetch(

        groq`*[_type == "course"]{
            _id,
            "slug": slug.current,
            title,
            content
        }`
    );
}

export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current
      }`
    )
  }
  
  export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title, 
        "slug": slug.current,
        content
      }`,{slug}
    )
  }

export async function getBooks(): Promise<Book[]>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="book"][0..1-1]{
            _id,
            "slug": slug.current,
            title, bookAuthor,"cover":cover.asset -> url,
            'lqip': cover.asset->metadata.lqip,
        }`
    );
}

export async function getBook(slug: string): Promise<Book>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="book" && slug.current == $slug][0]{
            _id,
            "slug": slug.current,
            "author": author -> title,
            "authorImage": author ->image.asset-> url,
            'authorLqip': author-> image.asset->metadata.lqip,
            "authorBio": author -> bio,
            title, bookAuthor, genre, page,
            year,list,content, publishedOn,
            "numberOfCharacters": length(pt::text(content)),
            "estimatedWordCount": round(length(pt::text(content)) / 5),
            "estimatedReadingTime": round(length(pt::text(content)) / 5 / 100 ),
            "cover":cover.asset->url,
            "categories": categories[]->,
            'lqip': cover.asset->metadata.lqip,
            content[]{
                ...,
                _type == "image" =>{
                  "lqip":@.asset->metadata.lqip
                },
                _type == "youtube" => {
                    "youtubelink":@.url,
                    "youtubetitle":@.title,
                    "youtubealt":@.alt
                },
                _type == "instagramPost" => {
                    "igpost":@.url
                },
                _type == "myCodeField" =>{
                    language,code,filename
                },
            },
            googleBooks,
        }`,{slug}
    );
}

export async function getMovies(): Promise<Movie>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="movie"][0..7]{
            _id,
            "slug": slug.current,
            title,"poster":poster.asset -> url,
            director,genre,duration,year,list,publishedOn,
            "categories": categories[]->,
            'lqip': poster.asset->metadata.lqip
        }`
    );
}

export async function getMovie(slug: string): Promise<Movie>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="movie" && slug.current == $slug][0]{
            _id,
            "slug": slug.current,
            "author": author -> title,
            "authorImage": author ->image.asset-> url,
            'authorLqip': author-> image.asset->metadata.lqip,
            "authorBio": author -> bio,
            title,"poster":poster.asset -> url,
            director,genre,duration,year,list,publishedOn,
            "categories": categories[]->,
            "numberOfCharacters": length(pt::text(content)),
            "estimatedWordCount": round(length(pt::text(content)) / 5),
            "estimatedReadingTime": round(length(pt::text(content)) / 5 / 100 ),
            'lqip': poster.asset->metadata.lqip,content
        }`,
        {slug}
    );
}

export async function getWorks(): Promise<Work>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="work"][0..9]| order(_createdAt desc){
            _id,
            "slug": slug.current,
            title,"mainImage":mainImage.asset->url,
            'lqip': mainImage.asset->metadata.lqip,
        }`
    );
}
export async function getArchiveWorks(): Promise<Work>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="work"]| order(_createdAt desc){
            "count": count(*[_type == "work"]),
            _id,
            "slug": slug.current,
            title,"mainImage":mainImage.asset->url,
            'lqip': mainImage.asset->metadata.lqip,
        }`
    );
}
export async function getWork(slug: string): Promise<Work>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="work" && slug.current == $slug][0]{
            _id,
            publishedOn,
            "author": author -> title,
            "authorImage": author ->image.asset-> url,
            'authorLqip': author-> image.asset->metadata.lqip,
            "authorBio": author -> bio, title,
            "slug": slug.current,
            "mainImage":mainImage.asset->url,
            "mainImageAlt":mainImage.alt,
            "mainImageCaption":mainImage.caption,
            'lqip': mainImage.asset->metadata.lqip,
            "skills": skills[]->title,
            "numberOfCharacters": length(pt::text(content)),
            "estimatedWordCount": round(length(pt::text(content)) / 5),
            "estimatedReadingTime": round(length(pt::text(content)) / 5 / 100 ),
            content,
            content[]{
                ...,
                _type == "image" =>{
                  "lqip":@.asset->metadata.lqip
                },
                _type == "youtube" => {
                    "youtubelink":@.url,
                    "youtubetitle":@.title,
                    "youtubealt":@.alt
                },
                _type == "instagramPost" => {
                    "igpost":@.url
                },
                _type == "myCodeField" =>{
                    language,code,filename
                }
            }

        }`,{slug}
    );
}

export async function getExps(): Promise<Experiment[]>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="experiment"][0..9]| order(_createdAt desc){
            _id,
            "slug": slug.current,
            title,"mainImage":mainImage.asset->url,
            'lqip': mainImage.asset->metadata.lqip
            
        }`
    );
}
export async function getArchiveExps(): Promise<Experiment[]>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="experiment"]| order(_createdAt desc){
            "count": count(*[_type == "experiment"]),
            _id,
            "slug": slug.current,
            title,"mainImage":mainImage.asset->url,
            'lqip': mainImage.asset->metadata.lqip
            
        }`
    );
}

export async function getExp(slug: string): Promise<Experiment>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="experiment" && slug.current == $slug][0]{
            _id,
            publishedOn,
            "author": author -> title,
            "authorImage": author ->image.asset-> url,
            'authorLqip': author-> image.asset->metadata.lqip,
            "authorBio": author -> bio, title,
            "slug": slug.current,
            "mainImage":mainImage.asset->url,
            "mainImageAlt":mainImage.alt,
            "mainImageCaption":mainImage.caption,
            'lqip': mainImage.asset->metadata.lqip,
            "skills": skills[]->title,
            "numberOfCharacters": length(pt::text(content)),
            "estimatedWordCount": round(length(pt::text(content)) / 5),
            "estimatedReadingTime": round(length(pt::text(content)) / 5 / 100 ),
            content,
            content[]{
                ...,
                _type == "image" =>{
                  "lqip":@.asset->metadata.lqip
                },
                _type == "youtube" => {
                    "youtubelink":@.url,
                    "youtubetitle":@.title,
                    "youtubealt":@.alt
                },
                _type == "instagramPost" => {
                    "igpost":@.url
                },
                _type == "myCodeField" =>{
                    language,code,filename
                }
            }

        }`,{slug}
    );
}

export async function getMottos(count: number): Promise<Motto>{
    

    return createClient(clientConfig).fetch(

        groq`*[_type == "quote"]{
            _id,
            blackWording,
            greyWording
        }`
    );
    
}
 