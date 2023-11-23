import { getArchiveWorks, getWork, getWorksCount } from "@/sanity/sanity-utils";
import ArchiveWorks from "@/app/component/archiveworks";
import type { Metadata } from 'next'
import { metadata } from "../layout";

export function generateMetadata(): Metadata {
  return {
      title: 'Works/Design - ' + metadata.title
  }
}

 
export default async function Work(props:any){

  const works = await getArchiveWorks();
  const count = await getWorksCount();

    return (
      <div className="container mx-auto mb-10">
                <div className="section-title">
                  <span className="section-name">Design ( {count} ) </span>
                </div>
          <ArchiveWorks works={works} />
      </div>
    )

}