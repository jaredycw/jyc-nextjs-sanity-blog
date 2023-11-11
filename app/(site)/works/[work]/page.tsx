import { getWork } from "@/sanity/sanity-utils";
import Image from "next/image";
import PostSection from "@/app/component/postsection";
import AuthorSection from "@/app/component/authorsection";
import MottoSection from "@/app/component/mottosection";
import PortableContent from "@/app/component/portablecontent";
import NotFound from "../../not-found";
import SnsWidget from "@/app/component/snswidget";
import { metadata } from "../../layout";
import DisqusPart from "@/app/component/disquspart";
import ArchiveMotionWorks from "@/app/component/motionframe/archivemworks";
import WorkImage from "@/app/component/workimage";
import SkillSection from "@/app/component/skillsection";
import IndustrySection from "@/app/component/industrysection";

export async function generateMetadata({ params }:any){

    const slug = params.work;
    const work = await getWork(slug);
    const host_name = process.env.HOST_NAME;
    const url = host_name + "works/" + work.slug;

    if (work !== null) {
    return {
        title: work.title + ` — ` + metadata.title ,
        description: work.title,
        generator: work._id,
        openGraph: {
            title: work.title + ` — ` + metadata.title ,    
            description: work.title,
            url: url,
            siteName: metadata.title ,
            images: [{
                url: work.mainImage
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


export default async function Work({ params }:any){

    const slug = params.work;
    const work = await getWork(slug);
    const host_name = process.env.HOST_NAME;

    if (work !== null) {
    const url = host_name + "works/" + work.slug;
        
    return (
      
    
        <div className="container mx-auto craft-contianer"> 
        <section className="work-heading">
            <div className="featured-wrapper">
    
                    {work.mainImage !== null ? (
                        <Image 
                        src={work.mainImage} alt={work.title} width={1920} height={1080}
                        className="work-wrapper-img" blurDataURL={work.lqip} placeholder="blur"/>
                        ) : (
                                <Image
                                src="https://cdn.sanity.io/images/mrzc8peh/production/33310bca93339ace486b6d58c50f461ee81e04f4-6000x4000.jpg"
                                alt="Default Thumbnail"
                                width={1920}
                                height={1080}
                                className="work-wrapper-img"
                                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAMEAQUI/8QAHxAAAgICAgMBAAAAAAAAAAAAAQIAAwQRBRIhIjFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAASH/2gAMAwEAAhEDEQA/APMdQBOjLWIqrsEGTpUFLCfwbEU+7EMfGjEJEeYgxJNmFj2XdkrXbMNAS54nKx1Z7KyFA+yXH5T4790PsJts5bItrZHbakahpjpyhBicM57GIh//2Q=="
                                placeholder="blur"
                                />
                            )}

                <span className="overlay"></span>
                <div className="top-left">{work.publishedOn}</div>
                <div className="top-right">{work.mainImageAlt || "Alt"}</div>
                <div className="bottom-right">{work.mainImageCaption || "Caption"}</div>
            </div>

            <div className="post-heading-box">
            <div className="post-heading">{work.title}</div>
                <div className="post-infor-wrapper">
                    <div className="post-author">{work.author}</div>
                    <div className="post-date">{work.publishedOn}</div>
                    <div className="post-reading">{work.estimatedReadingTime || "0"} mins</div> 
                </div>
                <div className="work-infor-wrapper">
                    <div className="post-skill">Required Skills: <SkillSection skills={work.skills} />
                    </div>
                    <div className="post-industry">Industry: <IndustrySection industries={work.industries}/> </div>
                    <div className="post-duration">Duration: {work.workingTime || "Null"}</div>
                </div>
            </div>

           <SnsWidget />
            

        </section>
                   

        <article className="type-post">
          <PortableContent content={work.content}  />
        </article>
        <section className="page-featured">

        <MottoSection />   
        <AuthorSection authorImage={work.authorImage} author={work.author} authorBio={work.authorBio} authorLqip={work.authorLqip}  />


        <div id="jyz-work-list" className="my-10">
            <div className="section-title">
              <span className="section-name">Latest Work</span>
            </div>
            
            <ArchiveMotionWorks>
                <WorkImage />
            </ArchiveMotionWorks>
        </div>                    
        </section>



    </div>
    );
    }
    else{
        return NotFound();
    }

}