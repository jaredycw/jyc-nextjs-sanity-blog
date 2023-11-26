import { getIndustries, getIndustriesCount } from "@/sanity/sanity-utils";
 
import ArchiveIndustries from "@/app/component/archiveindustries";
import { metadata } from "../layout";

export function generateMetadata() {
  return {
      title: 'Industries - ' + metadata.title
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