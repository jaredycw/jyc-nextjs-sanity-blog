import { getArchiveExps } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import ArchiveExperiments from "@/app/component/archivexps";
 
 


export default async function Experiment(props){

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