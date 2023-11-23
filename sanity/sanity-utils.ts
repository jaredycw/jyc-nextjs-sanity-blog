import { createClient, groq } from "next-sanity";
import { Post } from "@/types/Post";
import { Course } from "@/types/Course";
import { Book } from "@/types/Book";
import { Movie } from "@/types/Movie";
import { Work } from "@/types/Work";
import { Experiment } from "@/types/Exp";
import { Category } from "@/types/Category";
import clientConfig from "./config/client-config";
import { Motto } from "@/types/Motto";
import { Skill } from "@/types/Skill";
import { Industry } from "@/types/Industry";

export async function getSkillsCount(){
    return createClient(clientConfig).fetch(
      groq`count(*[_type=="skill"])`  
    );
}

export async function getSkills(): Promise<Skill[]>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="skill"]| order(title asc){
            _id,
            title,
            "slug": slug.current,
            description,
            "cardsCount": count(*[_type in ["work", "experiment"] && references(^._id) ]),
        }`
    );
}


export async function getSkill(slug: string): Promise<Skill>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="skill" && slug.current == $slug][0]{
            title,
            "slug": slug.current,
            description,
            "cards": *[_type in ["work", "experiment"] && references(^._id) ]| order(_createdAt desc){
            _id,
            title,
            parentPage,
            "slug": slug.current,
            "mainImage":mainImage.asset->url,
            'lqip': mainImage.asset->metadata.lqip
          }        
        }`,{slug}
    );
}

export async function getIndustriesCount(){
    return createClient(clientConfig).fetch(
      groq`count(*[_type=="industry"])`  
    );
}

export async function getIndustries(): Promise<Industry[]>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="industry"]| order(title asc){
            _id,
            title,
            "slug": slug.current,
            description,
            "cardsCount": count(*[_type in ["work", "experiment"] && references(^._id) ]),
        }`
    );
}
export async function getIndustry(slug: string): Promise<Industry>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="industry" && slug.current == $slug][0]{
            title,
            "slug": slug.current,
            description,
            "cards": *[_type in ["work", "experiment"] && references(^._id) ]| order(_createdAt desc){
            _id,
            title,
            parentPage,
            "slug": slug.current,
            "mainImage":mainImage.asset->url,
            'lqip': mainImage.asset->metadata.lqip
          }        
        }`,{slug}
    );
}

export async function getCategoriesCount(){
    return createClient(clientConfig).fetch(
      groq`count(*[_type=="category"])`  
    );
}

export async function getCategories(): Promise<Category[]>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="category"]| order(title asc){
            _id,
            title,
            "slug": slug.current,
            description,
            "cardsCount": count(*[_type == "post" && references(^._id)]),
            
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

export async function getPostsCount(){
    return createClient(clientConfig).fetch(
      groq`count(*[_type=="post"])`  
    );
}

export async function getPosts(): Promise<Post[]>{ 
 
    return createClient(clientConfig).fetch(

        groq`*[_type=="post"]| order(postOrder desc)[0..5]{
            _id,
            _updatedAt,
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

export async function getCourses(): Promise<Course[]>{ 
 

    return createClient(clientConfig).fetch(

        groq`*[_type=="course"][0..2]| order(_createdAt desc){
            _id,
            title,
            link,
        }`
    );
}


export async function getBooks(): Promise<Book[]>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="book"][0..1-1]| order(_createdAt desc){
            _id,
            link,
            title,
            "cover":cover.asset -> url,
            "coverAlt": cover.alt,
            bookAuthor,
            'lqip': cover.asset->metadata.lqip,
        }`
    );
}


export async function getMovies(): Promise<Movie[]>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="movie"][0..3]| order(_updatedAt desc){
            _id,
            link,
            title,
            "poster":poster.asset -> url,
            "posterAlt":poster.alt,
            "categories": categories[]->,
            'lqip': poster.asset->metadata.lqip
        }`
    );
}

export async function getWorksCount(){
    return createClient(clientConfig).fetch(
      groq`count(*[_type=="work"])`  
    );
}


export async function getWorks(): Promise<Work[]>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="work"][0..10]| order(postOrder desc){
            _id,
            "slug": slug.current,
            title,"mainImage":mainImage.asset->url,
            'lqip': mainImage.asset->metadata.lqip,
            _updatedAt
        }`
    );
}
export async function getArchiveWorks(): Promise<Work[]>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="work"]| order(postOrder desc){
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
            "skills": skills[]->,
            "industries": industries[]->,
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

export async function getExpsCount(){
    return createClient(clientConfig).fetch(
      groq`count(*[_type=="experiment"])`  
    );
}

export async function getExps(): Promise<Experiment[]>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="experiment"][0..10]| order(postOrder desc){
            _id,
            "slug": slug.current,
            title,"mainImage":mainImage.asset->url,
            'lqip': mainImage.asset->metadata.lqip,
            _updatedAt
            
        }`
    );
}
export async function getArchiveExps(): Promise<Experiment[]>{

    return createClient(clientConfig).fetch(

        groq`*[_type=="experiment"]| order(postOrder desc){
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
            "skills": skills[]->,
            "industries": industries[]->,
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

export async function getMottos(): Promise<Motto>{
    

    return createClient(clientConfig).fetch(

        groq`*[_type == "quote"]{
            _id,
            blackWording,
            greyWording
        }`
    );
    
}
 