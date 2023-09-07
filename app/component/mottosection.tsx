 
import { getMottos } from "@/sanity/sanity-utils";
import { Motto } from "@/types/Motto";
import RandomItemDisplay from "./randomquote";


export default async function MottoSection() {
  const mottos = await getMottos();
  
  return (
    <>
       
         <RandomItemDisplay items={mottos} id={mottos._id} blackWording={mottos.blackWording} greyWording={mottos.greyWording} />
   
    </>
  );
}
