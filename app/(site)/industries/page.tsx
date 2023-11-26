import { getIndustries, getIndustriesCount, getIndustry } from "@/sanity/sanity-utils";
 
import { metadata } from "../layout";
import ArchiveIndustries from "@/app/component/archiveindustries";

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

 


export default async function Industries(props : any){

  const Industries = await getIndustries();
  const count = await getIndustriesCount();

  if (Industries !== null) {
    return (
      <div className="container mx-auto mb-10">
                <div className="section-title">
                  <span className="section-name">Industries ( {count} ) </span>
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