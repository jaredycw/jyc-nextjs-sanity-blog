import { getExp } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import PostSection from "@/app/component/postsection";
import AuthorSection from "@/app/component/authorsection";
import TagSection from "@/app/component/tagsection";
import MottoSection from "@/app/component/mottosection";
import PortableContent from "@/app/component/portablecontent";
import NotFound from "../../not-found";
import SnsWidget from "@/app/component/snswidget";
import { Metadata, ResolvingMetadata } from 'next';
import { metadata } from "../../layout";
import DisqusPart from "@/app/component/disquspart";
 

export async function generateMetadata({ params }: Props){

    const slug = params.experiment;
    const experiment = await getExp(slug);
  

    if (experiment !== null) {
    return {
        title: experiment.title + ` — ` + metadata.title ,
        description: experiment.title,
        generator: experiment._id,
        openGraph: {
            title: experiment.title + ` — ` + metadata.title ,    
            description: experiment.title,
            url: experiment.slug,
            siteName: metadata.title ,
            images: [{
                url: experiment.mainImage
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


export default async function Experiment({ params }: Props){

    const slug = params.experiment;
    const experiment = await getExp(slug);

    if (experiment !== null) {
    const url = "http://localhost:3000/experiments/" + experiment.slug;
        
    return (
      
    
        <div className="container mx-auto"> 
        <section className="experiment-heading">
            <div className="featured-wrapper">
    
                    {experiment.mainImage !== null ? (
                        <Image 
                        src={experiment.mainImage} alt={experiment.title} width={1920} height={1080}
                        className="experiment-wrapper-img" priority="true" blurDataURL={experiment.lqip} placeholder="blur"/>
                        ) : (
                                <Image
                                src="https://cdn.sanity.io/images/mrzc8peh/production/33310bca93339ace486b6d58c50f461ee81e04f4-6000x4000.jpg"
                                alt="Default Thumbnail"
                                width={1920}
                                height={1080}
                                className="experiment-wrapper-img"
                                priority="true"
                                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAMEAQUI/8QAHxAAAgICAgMBAAAAAAAAAAAAAQIAAwQRBRIhIjFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAASH/2gAMAwEAAhEDEQA/APMdQBOjLWIqrsEGTpUFLCfwbEU+7EMfGjEJEeYgxJNmFj2XdkrXbMNAS54nKx1Z7KyFA+yXH5T4790PsJts5bItrZHbakahpjpyhBicM57GIh//2Q=="
                                placeholder="blur"
                                />
                            )}

                <span className="overlay"></span>
                <div className="featured-title">{experiment.title}</div>
                <div className="top-left">{experiment.publishedOn}</div>
                <div className="top-right">{experiment.mainImageAlt}</div>
                <div className="bottom-right">{experiment.mainImageCaption}</div>
            </div>

            <div className="post-heading-box">
            <div className="post-heading">{experiment.title}</div>
                <div className="post-infor-wrapper">
                    <div className="post-author">{experiment.author}</div>
                    <div className="post-date">{experiment.publishedOn}</div>
                    <div className="post-reading">{experiment.estimatedReadingTime} mins</div> 
                </div>
                <div className="exp-infor-wrapper">
                    <div className="post-skill">Required Skills: {experiment.skills}</div>
                    <div className="post-industry">Industry: {experiment.skills}</div>
                    <div className="post-duration">Duration: {experiment.skills}</div>
                </div>
            </div>

           <SnsWidget />
            

        </section>
                   

        <article className="type-post">
          <PortableContent content={experiment.content}  />
        </article>
        <section className="page-featured">

        <DisqusPart url={url} id={experiment._id} title={experiment.title} /> 
        <MottoSection />                    
        <AuthorSection authorImage={experiment.authorImage} author={experiment.author} authorBio={experiment.authorBio} authorLqip={experiment.authorLqip}  />


        <div id="jyz-experiment-list" className="my-10">
            <div className="section-title">
              <span className="section-name">Latest Experiment</span>
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