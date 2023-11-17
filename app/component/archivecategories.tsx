"use client"
import { useState } from "react"
import Link from 'next/link';
 
 


export default function ArchiveCategories({ categories }: any) {
    
 

      const [ catNum, setCatNum] = useState(10); // Default number of posts dislplayed

      function handleClick() {
        setCatNum(prevCatNum => prevCatNum + 10) // 6 is the number of posts you want to load per click
      }
      
      const hasMoreCats = catNum < categories.length; // Check if there are more posts to load


  return (
    <>
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">
            {categories.slice(0, catNum).map((category: any) =>(
              <Link href={`/categories/${category.slug}`} key={category._id}>
                <div className="tag-box-wrapper my-2 mx-2">
                  
                    <div className="tag-box">
                        <div className="tag-box-icon"><i className="icon-tag"></i></div>
                        <div className="tag-box-infor">{category.title}</div>
                    </div>
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