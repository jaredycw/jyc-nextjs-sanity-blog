 
import { getMottos } from "@/sanity/sanity-utils";
import RandomItemDisplay from "./randomquote";
import React from "react";

export default async function MottoSection() {
  const mottos = await getMottos();
  
  return (
    <div>  
      <RandomItemDisplay items={mottos} id={mottos._id} blackWording={mottos.blackWording} greyWording={mottos.greyWording} />
    </div>
  );
}
