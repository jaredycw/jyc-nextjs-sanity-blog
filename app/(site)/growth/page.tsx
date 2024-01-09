
import Image from "next/image"
import Link from "next/link"
import { getGrowths } from "@/sanity/sanity-utils";
import ArchiveGrowth from "@/app/component/growth/archivegrowths";
import { metadata } from "../layout"


export function generateMetadata(){
    const host_name = process.env.HOST_NAME;
    
    const url = host_name + "/growth/";
    return {
        
        title: 'Growth - ' + metadata.title,
         
        openGraph: {
            title: 'Growth' + ` — ` + metadata.title ,  
            url: url,
            images: [{
                url: "https://cdn.sanity.io/images/mrzc8peh/production/287d32a0d9160a8e440430f44684c2e5ef330374-1334x890.jpg"
            }
            ]
          },
    }
}

export default async function AboutGrowth(){

    const growths = await getGrowths();

    return (
       
        <div className="container mx-auto mt-5 mb-10 pb-10 ab-me">

            <section className="mt-20">
                <h2 className="uppercase md:text-5xl">Licenses & Certifications</h2>
                <h3 className="border-b">(For Basic Understanding )</h3>
                <div className="my-10">
                    <ArchiveGrowth growths={growths} />
                </div>
            </section>

            <section>
                <h2 className="uppercase md:text-5xl">Education</h2>
                <h3 className="border-b">(Diploma / Bachelor / Master)</h3>
                <div className="my-5">

                <div className="flex flex-wrap flex-col md:flex-row items-center p-6 article-sample my-5">
                        <div className="flex-none ml-0 md:ml-5 mb-5 md:mb-0">
                                    <Image
                                    className='shadow-sm bg-black w-16 h-16'
                                    src="https://media.licdn.com/dms/image/D4E0BAQHhJJQ6PkLcBg/company-logo_100_100/0/1688384749050/university_of_london_logo?e=1709769600&v=beta&t=z25OrD5FuPS6ZiOBpUZarbHVMa5iDEGkcmi09NgtWfg"
                                    alt="University of London"
                                    width={50}
                                    height={50}
                                    />
                        </div>
                        <div className='flex-1 flex-wrap ml-0 md:ml-5'>
                            <h2 className="text-center md:text-left break-words text-xl">
                                Bachelor of Computer Science
                            </h2>
                            <div className="text-center md:text-left mt-3">
                                <p className="mb-0 mr-0 md:mr-2 blcok md:inline text-center md:text-left jy-font-sans font-bold text-l text-gray-500">
                                    University of London&nbsp;&nbsp;‧&nbsp; 
                                </p> 
                                <p className="mb-0 blcok md:inline text-center md:text-left jy-font-sans font-bold text-l text-gray-500">
                                    Current
                                </p>
                            </div>
        
                        </div>
                </div>                    

                <div className="flex flex-wrap flex-col md:flex-row items-center p-6 article-sample my-5">
                        <div className="flex-none ml-0 md:ml-5 mb-5 md:mb-0">
                                    <Image
                                    className='shadow-sm bg-black w-16 h-16'
                                    src="https://media.licdn.com/dms/image/C560BAQHtsZjrx46lRw/company-logo_100_100/0/1630643447192?e=1709769600&v=beta&t=eYJCpT8wNK6RckBI6lUed_NLBZElx7PugpwY58hNSIA"
                                    alt="Hong Kong Baptist University"
                                    width={50}
                                    height={50}
                                    />
                        </div>
                        <div className='flex-1 flex-wrap ml-0 md:ml-5'>
                            <h2 className="text-center md:text-left break-words text-xl">
                                Bachelor of Social Sciences
                            </h2>
                            <div className="text-center md:text-left mt-3">
                                <p className="mb-0 mr-0 md:mr-2 blcok md:inline text-center md:text-left jy-font-sans font-bold text-l text-gray-500">
                                    Hong Kong Baptist University&nbsp;&nbsp;‧&nbsp; 
                                </p> 
                                <p className="mb-0 blcok md:inline text-center md:text-left jy-font-sans font-bold text-l text-gray-500">
                                    2020
                                </p>
                            </div>
        
                        </div>
                </div>
                    
                </div>
            </section>
        </div>
      
    )

}
