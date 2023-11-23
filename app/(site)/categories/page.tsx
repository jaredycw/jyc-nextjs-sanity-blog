import { getCategories, getCategoriesCount } from "@/sanity/sanity-utils";
import ArchiveCategories from "@/app/component/archivecategories";
import type { Metadata } from 'next'
import { metadata } from "../layout";
import Link from "next/link";  

export function generateMetadata(): Metadata {
  return {
      title: 'Categories - ' + metadata.title
  }
}

 


export default async function Category(props : any){

  const categories = await getCategories();
  const count = await getCategoriesCount();

  if (categories !== null) {
    return (
      <div className="container mx-auto mb-10">
                <div className="section-title">
                  <span className="section-name">Tags ( {count} ) </span>
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
        <p>Sorry! There are no items</p>
      </div>

    )
  }

}