
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
                <h3 className="border-b">(Official / Online Self-Learning )</h3>
                <div className="my-10">
                    <ArchiveGrowth growths={growths} />
                </div>
            </section>

            <section>
                <h2 className="uppercase md:text-5xl">Education</h2>
                <h3 className="border-b">(Diploma / Bachelor / Master)</h3>
                <div className="my-5">
                    
                </div>
            </section>
        </div>
      
    )

}
