 import Link from "next/link";
 
export default async function SkillSection(props: any){
 
  if (props.skills !== null) {
  return (
        <>

        {props.skills.map((skill: any, index: number) => (
          <span key={skill.title}>
            {skill.title}
            {index !== props.skills.length - 1 ? ", " : ""}
          </span>
        ))}

        </>
       
  );}
  else{
    return(
    <>

    No skills included
    
    </>);
  }
}