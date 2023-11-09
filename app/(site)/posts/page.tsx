import { getArchivePosts } from "@/sanity/sanity-utils";
import ArchivePost from "@/app/component/archivepost";
import type { Metadata } from 'next'
import { metadata } from "../layout";

export function generateMetadata(): Metadata {
  return {
      title: 'Blog - ' + metadata.title
  }
}

export default async function Post(props:any){

  const posts = await getArchivePosts();

  if (posts !== null) {
    return (
      <div className="container mx-auto">
                <div className="section-title">
                  <span className="section-name">Blog</span> 
                </div>
          <ArchivePost posts={posts} />
      </div>
    )
  } else {
    return (
      <div className="container mx-auto">
                <div className="section-title">
                  <span className="section-name">Blog</span>
                </div>
            <p>Sorry! There are no post items.</p>
      </div>
    )
  }

}