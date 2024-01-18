"use client"
import { useState } from "react"
import Link from 'next/link';
import Image from 'next/image';
 


export default function ArchiveWorks({ works }: any) {
    
 
      const [ catNum, setCatNum] = useState(6); // Default number of posts dislplayed

      function handleClick() {
        setCatNum(prevCatNum => prevCatNum + 6) // 6 is the number of posts you want to load per click
      }
      
      const hasMoreCats = catNum < works.length; // Check if there are more posts to load


  return (
    <>
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-3">
            {works.slice(0, catNum).map((work : any) =>(
              <Link href={`/works/${work.slug}`} key={work._id}>
                <div className="jy-card">
                            {work.mainImage && (<Image src={work.mainImage} alt={work.title} width={1080} height={1080} 
                            blurDataURL={work.lqip} placeholder='blur'/>)}
                </div>
              </Link>
            ))}
          </div>

            <div className="explore-wrapper">
                    {hasMoreCats && (
                        <button onClick={handleClick}>Load More</button>
                    )}
            </div>
    </>
  );
}
