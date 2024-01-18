import BbcTechnologyPart from "@/app/component/rss/bbctechnology";
import BbcTopStoriesPart from "@/app/component/rss/bbctopstories";
import CodecademyPart from "@/app/component/rss/codecademy";
import CourseraPart from "@/app/component/rss/coursera";
import OpenCulturePart from "@/app/component/rss/openculture";
import Link from "next/link";
import type { Metadata } from 'next'
import { metadata } from "../../layout"

export function generateMetadata(): Metadata {
  return {
      title: 'Fetching RSS to JSON - ' + metadata.title,
      description: 'Fetching RSS from Courseara, Open Culture, Codecademy, BBC Hot topics, and BBC Technology',
      openGraph: {
        title: 'Fetching RSS to JSON - ' + metadata.title,
        images: [{
            url: "https://cdn.sanity.io/images/mrzc8peh/production/287d32a0d9160a8e440430f44684c2e5ef330374-1334x890.jpg"
        }
        ]
      },
  }
}


export default function FetchingRSS(){

 
    return (
       
        <div className="container mx-auto mb-10">
        <h1 className="text-center">Fetching RSS</h1>

        <div className="text-center buttons-list">
            <Link href="#coursera-section" aria-label="Coursera Section"><div className="button">Coursera</div></Link>
            <Link href="#open-culture-section" aria-label="Open Culture Section"><div className="button">Open Culture</div></Link>
            <Link href="#codecademy-section" aria-label="Codecademy Section"><div className="button">Codecademy</div></Link>
            <Link href="#bbc-top-stories-section" aria-label="BBC Top Stories Section"><div className="button">BBC Top</div></Link>
            <Link href="#bbc-technology-section" aria-label="BBC Technology Section"><div className="button">BBC Technology</div></Link>
        </div>

        <section id="coursera-section" className="pt-28">
            <CourseraPart />
        </section>

        <section id="open-culture-section" className="pt-28">
            <OpenCulturePart />
        </section>

        <section id="codecademy-section" className="pt-28">
            <CodecademyPart />
        </section>

        <section id="bbc-top-stories-section" className="pt-28">
            <BbcTopStoriesPart />
        </section>

        <section id="bbc-technology-section" className="pt-28">
            <BbcTechnologyPart />
        </section>
        </div>
      
    )

}
