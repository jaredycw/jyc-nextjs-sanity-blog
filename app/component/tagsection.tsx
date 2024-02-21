 import Link from "next/link";
 
export default async function TagSection(props: any){
 
  if (props.categories !== null) {
  return (
        <>
                 <div className="tag-section">
                    <div className="flex flex-wrap">
                        <div className="tag-title w-full lg:w-2/12 self-center">Tag</div>
                        <div className="tag-wrapper w-full lg:w-10/12 self-start">
                        <ul className="tag-wrapper">
                            {props.categories.map((category : any) => (
                              
                              <li className="tag" key={category._id} >
                                <Link href={`/categories/${category.slug.current}`} >
                                  {category.title}
                                </Link>
                              </li>
                              
                            ))}
                        </ul>
                        </div>
                    </div>
        </div>  
        </>
       
  );}
  else{
    return(<>
                  <div className="tag-section">
                    <div className="flex flex-wrap">
                        <div className="tag-title w-full lg:w-2/12 self-center">Tag</div>
                        <div className="tag-wrapper w-full lg:w-10/12 self-start">
                        <ul className="tag-wrapper">
                            <li>There are no tag items</li>
                        </ul>
                        </div>
                    </div>
                  </div>  
    
    
    </>);
  }
}