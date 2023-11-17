"use client"
import { useState } from "react"
import Link from 'next/link';
import Image from 'next/image';
 


export default function ArchiveIndustries({ industries }: any) {
    
 

      const [ industriesNum, setIndustriesNum] = useState(10); // Default number of posts dislplayed

      function handleClick() {
        setIndustriesNum(prevIndustriesNum => prevIndustriesNum + 10) // 6 is the number of posts you want to load per click
      }
      
      const hasMoreIndustries = industriesNum < industries.length; // Check if there are more posts to load


  return (
    <>
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">
            {industries.slice(0, industriesNum).map((industry: any) =>(
              <Link href={`/industries/${industry.slug}`} key={industry._id}>
                <div className="tag-box-wrapper my-2 mx-2">
                  
                    <div className="tag-box">
                        <div className="tag-box-icon"><i className="icon-industry"></i></div>
                        <div className="tag-box-infor">{industry.title}</div>
                    </div>
                </div>
              </Link>
            ))}
          </div>

            <div className="explore-wrapper">
                    {hasMoreIndustries && (
                        <button onClick={handleClick}>Load More</button>
                    )}
            </div>
    </>
  );
}