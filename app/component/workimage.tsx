
import { getWorks } from '@/sanity/sanity-utils';
import Link from 'next/link';
import Image from 'next/image';
 

 
 

export default async function WorkImage() {

  const works = await getWorks();
 

  return (
                <>
                    {works.map((work: any) => (
                      <div className="slider-card" key={work._id}>
                        <Link href={`/works/${work.slug}`} key={work._id} aria-label={`Read more ${work.title}`} >
                          {work.mainImage && (<Image src={work.mainImage} alt={work.title} width={800} height={1056} 
                          blurDataURL={work.lqip} placeholder="blur" loading="lazy" />)}
                        </Link>
                      </div>
                    ))}
                </>
       
  );
}