import { getArchiveWorks } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import ArchiveWorks from "@/app/component/archiveworks";
 
 


export default async function Work(props){

  const works = await getArchiveWorks();

    return (
      <div className="container mx-auto mb-10">
                <div className="section-title">
                  <span className="section-name">Design</span>
                </div>
          <ArchiveWorks works={works} />
      </div>
    )

}