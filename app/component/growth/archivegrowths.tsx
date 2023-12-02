"use client"

import Link from 'next/link';
import Image from 'next/image';
import { getCertFormattedDate } from '@/app/lib/date';


export default function ArchiveGrowth({ growths }: any) {
    
 
  if ( growths !== null && growths.length !== 0) {
  return (
    <>
          

              
                {growths.map((growth: any) =>(
                    <Link href={growth.link} key={growth._id} target='_blank'> 
                        <div className="flex flex-wrap flex-col md:flex-row items-center p-6 article-sample my-5">
                            <div className="flex-none ml-0 md:ml-5 mb-5 md:mb-0">
                                    <Image
                                    className='shadow-sm bg-black w-16 h-16'
                                    src={growth.logo || growth.externalLogo}
                                    alt={growth.externalLogoAlt}
                                    width={50}
                                    height={50}
                                    />
                            </div>
                            <div className='flex-1 flex-wrap ml-0 md:ml-5'>
                            <h2 className="text-center md:text-left break-words text-xl">
                                {growth.title}
                            </h2>
                            <div className="text-center md:text-left mt-3">
                                <p className="mb-0 mr-0 md:mr-2 blcok md:inline text-center md:text-left jy-font-sans font-bold text-l text-gray-500">
                                    {growth.institution}&nbsp;&nbsp;‧&nbsp; 
                                </p> 
                                <p className="mb-0 blcok md:inline text-center md:text-left jy-font-sans font-bold text-l text-gray-500">
                                  {getCertFormattedDate(new Date(growth.completedOn))}
                                </p>
                            </div>
        
                        </div>
                        </div>
                    </Link>
                ))}


    </>
  );
  } else {
    return(
      <p>Sorry! There are no growth items.</p>
    )
  }  
}