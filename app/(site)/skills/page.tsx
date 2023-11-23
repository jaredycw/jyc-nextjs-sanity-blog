import {  getSkills, getSkillsCount } from "@/sanity/sanity-utils";
import type { Metadata } from 'next'
import { metadata } from "../layout";
import ArchiveSkills from "@/app/component/archiveskills";

export function generateMetadata(): Metadata {
  return {
      title: 'Skills - ' + metadata.title
  }
}

 


export default async function Skills(props : any){

  const skills = await getSkills();
  const count = await getSkillsCount();

  if (skills !== null) {
    return (
      <div className="container mx-auto mb-10">
                <div className="section-title">
                  <span className="section-name">Skills ( {count} ) </span>
                </div>
          <ArchiveSkills skills={skills}/>
      </div>
    )
  } else {

    return(

      <div className="container mx-auto mb-10">
        <div className="section-title">
          <span className="section-name">Skills</span>
        </div>
        <p>Sorry! There are no skill items</p>
      </div>

    )
  }

}