"use client"
import { useState } from "react"
import Link from 'next/link';
import Image from 'next/image';
 


export default function ArchiveCards({ cards }: any) {
    
 
      const [ catNum, setCatNum] = useState(6); // Default number of posts dislplayed

      function handleClick() {
        setCatNum(prevCatNum => prevCatNum + 6) // 6 is the number of posts you want to load per click
      }
      
      const hasMoreCats = catNum < cards.length; // Check if there are more posts to load

  if ( cards !== null && cards.length !== 0) {
    return (
      <>
            <div className="grid grid-cols-1 gap-10 xl:grid-cols-3">
              {cards.slice(0, catNum).map((card : any) =>(
                <Link href={`/${card.parentPage}/${card.slug}`} key={card._id}>
                  <div className="jy-card">
                      
                              {card.mainImage && (<Image src={card.mainImage} alt={card.title} width={1920} height={1080} 
                              blurDataURL={card.lqip} placeholder='blur'/>)}
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
    } else {
      return(
        <p>Sorry! There are no items.</p>
      )
    }  
  }
