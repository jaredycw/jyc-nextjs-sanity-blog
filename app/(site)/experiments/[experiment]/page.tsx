import { getExp } from "@/sanity/sanity-utils";
import Image from "next/image";
import AuthorSection from "@/app/component/authorsection";
import MottoSection from "@/app/component/mottosection";
import PortableContent from "@/app/component/portablecontent";
import SnsWidget from "@/app/component/snswidget";
import { metadata } from "../../layout";
import DisqusPart from "@/app/component/disquspart";
import ExperimentImage from "@/app/component/expimage";
import ArchiveMotionExperiments from "@/app/component/motionframe/archivemexps";
import AdsPart from "@/app/component/adpart";
import SkillSection from "@/app/component/skillsection";
import IndustrySection from "@/app/component/industrysection";
import { notFound } from "next/navigation";
import { getFormattedDate } from "@/app/lib/date";


export async function generateMetadata({ params } : any){

    const slug = params.experiment;
    const experiment = await getExp(slug);
    const host_name = process.env.HOST_NAME;

    const url = host_name + "experiments/" + slug;

    if (experiment !== null) {
    return {
        title: experiment.title + ` — ` + metadata.title ,
        description: experiment.excerpt,
        generator: experiment._id,
        openGraph: {
            title: experiment.title + ` — ` + metadata.title ,    
            url: url,
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


export default async function Experiment({ params }: any){

    const slug = params.experiment;
    const experiment = await getExp(slug);
    const host_name = process.env.HOST_NAME;

    if (experiment !== null) {
    const url = host_name + "experiments/" + experiment.slug;
        
    return (
      
    
        <div className="container mx-auto craft-contianer"> 
        <section className="experiment-heading">
            <div className="featured-wrapper">
    
                    {experiment.mainImage !== null ? (
                        <Image 
                        src={experiment.mainImage} alt={experiment.title} width={1920} height={1080}
                        className="experiment-wrapper-img" blurDataURL={experiment.lqip} placeholder="blur"/>
                        ) : (
                                <Image
                                src="https://cdn.sanity.io/images/mrzc8peh/production/33310bca93339ace486b6d58c50f461ee81e04f4-6000x4000.jpg"
                                alt="Default Thumbnail"
                                width={1920}
                                height={1080}
                                className="experiment-wrapper-img"
                                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAMEAQUI/8QAHxAAAgICAgMBAAAAAAAAAAAAAQIAAwQRBRIhIjFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAASH/2gAMAwEAAhEDEQA/APMdQBOjLWIqrsEGTpUFLCfwbEU+7EMfGjEJEeYgxJNmFj2XdkrXbMNAS54nKx1Z7KyFA+yXH5T4790PsJts5bItrZHbakahpjpyhBicM57GIh//2Q=="
                                placeholder="blur"
                                />
                            )}

                <span className="overlay"></span>
                <div className="top-left">{getFormattedDate(new Date(experiment.publishedOn))}</div>
                <div className="top-right">{experiment.mainImageAlt || "Alt"}</div>
                <div className="bottom-right">{experiment.mainImageCaption || "Caption"}</div>
            </div>

            <div className="post-heading-box">
            <div className="post-heading">{experiment.title}</div>
                <div className="post-infor-wrapper">
                    <div className="post-author">{experiment.author}</div>
                    <div className="post-date">{getFormattedDate(new Date(experiment.publishedOn))}</div>
                    <div className="post-reading">{experiment.estimatedReadingTime  || "0"} mins</div> 
                </div>
                <div className="exp-infor-wrapper">
                    <div className="post-skill">Required Skills: 
                        <div>
                        <SkillSection skills={experiment.skills} />
                        </div>
                    </div>
                    <div className="post-industry">Industry: 
                        <div>
                        <IndustrySection industries={experiment.industries}/> 
                        </div>
                    </div>
                    <div className="post-duration">Duration: 
                        {experiment.workingTime ? `${experiment.workingTime} Hour` : "N/A"}
                    </div>
                </div>
            </div>

           <SnsWidget />
           <AdsPart />
            

        </section>
                   

        <article className="type-post jyc-content">
          <PortableContent content={experiment.content}  />
        </article>
        <section className="page-featured">

        <DisqusPart url={url} id={experiment._id} title={experiment.title} /> 
        
        <MottoSection />                    
        <AuthorSection authorImage={experiment.authorImage} author={experiment.author} authorBio={experiment.authorBio} authorLqip={experiment.authorLqip}  />


        <div id="jyz-experiment-list" className="archive-list my-10">
            <div className="section-title">
              <span className="section-name">Latest Experiment</span>
            </div>
            <ArchiveMotionExperiments>      
              <ExperimentImage />
            </ArchiveMotionExperiments>  
            
 
        </div>                    
        </section>



    </div>
    );
    }
    else{
        return notFound();
    }

}