import { getCategories } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import ArchiveCategories from "@/app/component/archivecategories";
 
 


export default async function Category(props){

  const categories = await getCategories();

  if (categories !== null) {
    return (
      <div className="container mx-auto mb-10">
                <div className="section-title">
                  <span className="section-name">Tags</span>
                </div>
          <ArchiveCategories categories={categories} />
      </div>
    )
  } else {

    return(

      <div className="container mx-auto mb-10">
        <div className="section-title">
          <span className="section-name">Tags</span>
        </div>
        <p>Sorry! There are no category items</p>
      </div>

    )
  }

}