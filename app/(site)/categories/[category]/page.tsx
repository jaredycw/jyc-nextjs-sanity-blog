import { getCategories, getCategory } from "@/sanity/sanity-utils";
import { getArchivePosts } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import ArchivePost from "@/app/component/archivepost";
import NotFound from "../../not-found";
 


export default async function Category({ params }: any){

  const slug = params.category;
  const category = await getCategory(slug);
  const posts = await getArchivePosts();

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

    return NotFound();
  }

}