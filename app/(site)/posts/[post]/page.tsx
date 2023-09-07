import { getPost } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import PostSection from "@/app/component/postsection";
import AuthorSection from "@/app/component/authorsection";
import TagSection from "@/app/component/tagsection";
import MottoSection from "@/app/component/mottosection";
import PortableContent from "@/app/component/portablecontent";
import NotFound from "../../not-found";
import SnsWidget from "@/app/component/snswidget";
import { metadata } from "../../layout";
import DisqusPart from "@/app/component/disquspart";
 

export async function generateMetadata({ params }: Props){

    const slug = params.post;
    const post = await getPost(slug);
  

    if (post !== null) {
    return {
        title: post.title + ` — ` + metadata.title ,
        description: post.title,
        generator: post._id,
        openGraph: {
            title: post.title + ` — ` + metadata.title ,    
            description: post.title,
            url: post.slug,
            siteName: metadata.title ,
            images: [{
                url: post.mainImage
            }
            ]
          }
      };
    } else {
        return {
            title: `404 Page not Found` + ` — ` + metadata.title
        };
    }
}


export default async function Post({ params }: Props){

    const slug = params.post;
    const post = await getPost(slug);
    

    if (post !== null) {
        const url = "http://localhost:3000/posts/" + post.slug;
    return (
      
    
        <div className="container mx-auto"> 
        <section className="post-heading">
            <div className="featured-wrapper">
    
                    {post.mainImage !== null ? (
                        <Image 
                        src={post.mainImage} alt={post.title} width={1920} height={1080}
                        className="post-wrapper-img" blurDataURL={post.lqip} placeholder="blur" loading="lazy"/>
                        ) : (
                                <Image
                                src="https://cdn.sanity.io/images/mrzc8peh/production/33310bca93339ace486b6d58c50f461ee81e04f4-6000x4000.jpg"
                                alt="Default Thumbnail"
                                width={1920}
                                height={1080}
                                className="post-wrapper-img"
                                loading="lazy"
                                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAMEAQUI/8QAHxAAAgICAgMBAAAAAAAAAAAAAQIAAwQRBRIhIjFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAASH/2gAMAwEAAhEDEQA/APMdQBOjLWIqrsEGTpUFLCfwbEU+7EMfGjEJEeYgxJNmFj2XdkrXbMNAS54nKx1Z7KyFA+yXH5T4790PsJts5bItrZHbakahpjpyhBicM57GIh//2Q=="
                                placeholder="blur"
                                />
                            )}

                <span className="overlay"></span>
                <div className="featured-title">{post.title}</div>
                <div className="top-left">{post.publishedOn}</div>
                <div className="top-right">{post.mainImageAlt}</div>
                <div className="bottom-right">{post.mainImageCaption}</div>
            </div>

            <div className="post-heading-box">
            <div className="post-heading">{post.title}</div>
                <div className="post-infor-wrapper">
                    <div className="post-author">{post.author}</div>
                    <div className="post-date">{post.publishedOn}</div>
                    <div className="post-reading">{post.estimatedReadingTime} mins read</div>
                </div>
            </div>

           <SnsWidget />
            

        </section>
                   
        <div className="ad-placement my-5"></div>

        <article className="type-post">
          <PortableContent content={post.content}  />
        </article>
        <section className="page-featured">

        <DisqusPart url={url} id={post._id} title={post.title} /> 
        <MottoSection />                    
        <TagSection categories={post.categories} />
            <AuthorSection authorImage={post.authorImage} author={post.author} authorBio={post.authorBio} authorLqip={post.authorLqip}  />

        <div className="ad-placement my-5"></div>

        <div id="jyz-post-list" className="my-10">
            <div className="section-title">
              <span className="section-name">Latest Post</span>
            </div>
            <PostSection/>
        </div>                    
        </section>



    </div>
    );
    }
    else{
        return NotFound();
    }

}