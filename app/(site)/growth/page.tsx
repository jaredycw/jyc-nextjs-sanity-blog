
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
        description: 'Embrace growth and set milestones on my online learning journey. Achieving degree certificates fuels my personal and professional development. #EducationForSuccess',
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
                                    src="https://media.licdn.com/dms/image/v2/D4E0BAQFaGp18XZmvsQ/company-logo_200_200/company-logo_200_200/0/1719823486163/university_of_london_logo?e=1732752000&v=beta&t=6FccsSORWCWzEothGdFO7m8gOh6wdwnuIwpN5CE1gmk"
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
                                    src="https://media.licdn.com/dms/image/v2/C560BAQHtsZjrx46lRw/company-logo_200_200/company-logo_200_200/0/1630643447192?e=1732752000&v=beta&t=KMqgjb4UFoACTn34YI5HR3ylCo7M4eSvQZTzIyb4_CI"
                                    alt="Hong Kong Baptist University"
                                    width={50}
                                    height={50}
                                    />
                        </div>
                        <div className='flex-1 flex-wrap ml-0 md:ml-5'>
                            <h2 className="text-center md:text-left break-words text-xl">
                                Bachelor of Social Sciences (Government and International Studies)
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

            <section>
            <h2 className="uppercase md:text-5xl">Reading List</h2>
            <div className="my-5">
                Coming Soon
            </div>

            </section>
        </div>
      
    )

}
