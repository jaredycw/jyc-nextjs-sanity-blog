 import Link from "next/link";
 
export default async function IndustrySection(props: any){
 
  if (props.industries !== null) {
  return (
        <>

        {props.industries.map((industry: any, index: number) => (
          <span key={industry.title}>
            <Link href={`/industries/${industry.slug.current}`} key={industry._id} className="ugly-blue"> {industry.title}</Link>
            {index !== props.industries.length - 1 ? ", " : ""}
          </span>
        ))}

        </>
       
  );}
  else{
    return(
    <>

    No Industries included
    
    </>);
  }
}
