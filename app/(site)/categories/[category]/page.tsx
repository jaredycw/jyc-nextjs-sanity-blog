import { getCategory } from "@/sanity/sanity-utils";
import ArchivePost from "@/app/component/archivepost";
import { notFound } from "next/navigation";
import { metadata } from "@/app/(studio)/layout";

export async function generateMetadata({params}:any){
  const slug = params.category;
  const category = await getCategory(slug);

  if (category !== null) {
    return {
        title:  category.title + ' - Categories - ' + metadata.title,
        description: category.description,
        generator: category._id,
      };
    } else {
        return {
            title: `404 Page not Found` + ` — ` + metadata.title
        };
    }
 
}


export default async function Category({ params }: any){

  const slug = params.category;
  const category = await getCategory(slug);

  if (category !== null) {
    return (
      <div className="container mx-auto mb-10">
        <div className="section-title">
          <h1>{category.title}</h1>
          {category.description}
        </div>
          <ArchivePost posts={category.posts} />
          
      </div>
    )
  } else {

    return notFound();
  }

}