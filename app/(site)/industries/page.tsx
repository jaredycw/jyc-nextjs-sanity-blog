import { getIndustries } from "@/sanity/sanity-utils";
import type { Metadata } from 'next'
import { metadata } from "../layout";
import ArchiveIndustries from "@/app/component/archiveindustries";

export function generateMetadata(): Metadata {
  return {
      title: 'Industries - ' + metadata.title
  }
}

 


export default async function Industries(props : any){

  const Industries = await getIndustries();

  if (Industries !== null) {
    return (
      <div className="container mx-auto mb-10">
                <div className="section-title">
                  <span className="section-name">Industries</span>
                </div>
          <ArchiveIndustries industries={Industries} />
      </div>
    )
  } else {

    return(

      <div className="container mx-auto mb-10">
        <div className="section-title">
          <span className="section-name">Industries</span>
        </div>
        <p>Sorry! There are no items</p>
      </div>

    )
  }

}