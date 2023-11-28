import { getSkill } from "@/sanity/sanity-utils";
import ArchiveCards from "@/app/component/archivecards";
import { notFound } from "next/navigation";
import { metadata } from "../../layout";


export async function generateMetadata({params}:any) {
  const slug = params.skill;
  const skill = await getSkill(slug);

  if (skill !== null) {
    return {
        title:  skill.title + ' - Skills - ' + metadata.title,
        description: skill.description,
        generator: skill._id,
      };
    } else {
        return {
            title: `404 Page not Found` + ` — ` + metadata.title
        };
    }
}


export default async function Skill({ params }: any){

  const slug = params.skill;
  const skill = await getSkill(slug);
 

  if (skill !== null) {
    return (
      <div className="container mx-auto mb-10">
        <div className="section-title">
          <h1>{skill.title}</h1>
          {skill.description}
        </div>
          <ArchiveCards cards={skill.cards} />
      </div>
    )
  } else {

    return notFound();
  }

}