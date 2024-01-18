"use client"
import { useState } from "react"
import Link from 'next/link';
import Image from 'next/image';
 


export default function ArchiveExperiments({ experiments }: any) {
    
 

      const [ catNum, setCatNum] = useState(6); // Default number of posts dislplayed

      function handleClick() {
        setCatNum(prevCatNum => prevCatNum + 6) // 6 is the number of posts you want to load per click
      }
      
      const hasMoreCats = catNum < experiments.length; // Check if there are more posts to load


  return (
    <>
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-3">
            {experiments.slice(0, catNum).map((experiment : any) =>(
              <Link href={`/experiments/${experiment.slug}`} key={experiment._id}>
                <div className="jy-card">
                            {experiment.mainImage && (<Image src={experiment.mainImage} alt={experiment.title} width={1080} height={1080} 
                            blurDataURL={experiment.lqip} placeholder='blur'/>)}
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