"use client"
import { useState } from "react"
import Link from 'next/link';
 


export default function ArchiveSkills({ skills, count}: any) {
    
 

      const [ skillsNum, setSkillsNum] = useState(10); // Default number of posts dislplayed

      function handleClick() {
        setSkillsNum(prevSkillsNum => prevSkillsNum + 10) // 6 is the number of posts you want to load per click
      }
      
      const hasMoreSkills = skillsNum < skills.length; // Check if there are more posts to load


  return (
    <>
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-5">
            {skills.slice(0, skillsNum).map((skill: any) =>(
              <Link href={`/skills/${skill.slug}`} key={skill._id}>
                <div className="tag-box-wrapper my-2 mx-2">
                  
                    <div className="tag-box">
                        <div className="tag-box-icon"><i className="icon-skill"></i></div>
                        <div className="tag-box-infor">{skill.title}
                        <br></br>
                        <span>( {skill.cardsCount} )</span></div>
                    </div>
                </div>
              </Link>
            ))}
          </div>

            <div className="explore-wrapper">
                    {hasMoreSkills && (
                        <button onClick={handleClick}>Load More</button>
                    )}
            </div>
    </>
  );
}