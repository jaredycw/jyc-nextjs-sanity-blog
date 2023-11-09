import { getArchiveExps } from "@/sanity/sanity-utils";
import ArchiveExperiments from "@/app/component/archivexps";
import type { Metadata } from 'next'
import { metadata } from "../layout";

export function generateMetadata(): Metadata {
  return {
      title: 'Experiments - ' + metadata.title
  }
}

 


export default async function Experiment(props : any){

  const experiments = await getArchiveExps();

    return (
      <div className="container mx-auto mb-10">
                <div className="section-title">
                  <span className="section-name">Experiments</span>
                </div>
          <ArchiveExperiments experiments={experiments} />
      </div>
    )

}