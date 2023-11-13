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
      title: 'Fetching RSS to JSON - ' + metadata.title
  }
}


export default function FetchingRSS(){

 
    return (
       
        <div className="container mx-auto mb-10">
        <h1 className="text-center">Fetching RSS</h1>

        <ul className="text-center buttons-list">
            <Link href="#coursera-section" aria-label="Coursera Section"><li className="button">Coursera</li></Link>
            <Link href="#open-culture-section" aria-label="Open Culture Section"><li className="button">Open Culture</li></Link>
            <Link href="#codecademy-section" aria-label="Codecademy Section"><li className="button">Codecademy</li></Link>
            <Link href="#bbc-top-stories-section" aria-label="BBC Top Stories Section"><li className="button">BBC Top</li></Link>
            <Link href="#bbc-technology-section" aria-label="BBC Technology Section"><li className="button">BBC Technology</li></Link>
        </ul>

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
