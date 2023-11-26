import { getIndustry } from "@/sanity/sanity-utils";
import ArchiveCards from "@/app/component/archivecards";
import { notFound } from "next/navigation";
import { metadata } from "../../layout";
 
export async function generateMetadata({params}:any) {
  const slug = params.category;
  const industry = await getIndustry(slug);

  if (industry !== null) {
    return {
        title:  industry.title + ' - Industries - ' + metadata.title,
        description: industry.description,
        generator: industry._id,
      };
    } else {
        return {
            title: `404 Page not Found` + ` — ` + metadata.title
        };
    }
}

export default async function Category({ params }: any){

  const slug = params.industry;
  const industry = await getIndustry(slug);
 

  if (industry !== null) {
    return (
      <div className="container mx-auto mb-10">
        <div className="section-title">
          <h1>{industry.title}</h1>
          {industry.description}
        </div>
          <ArchiveCards cards={industry.cards} />
 
      </div>
    )
  } else {

    return notFound();
  }

}