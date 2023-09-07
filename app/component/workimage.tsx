
import { getWorks } from '@/sanity/sanity-utils';
import { Work } from '@/types/Work';
import Link from 'next/link';
import Image from 'next/image';

export default async function WorkImage() {

  const works = await getWorks();

  return (
                <>
                    {works.map((work) => (
                      <div className="slider-card" key={work._id}>
                        <Link href={`/works/${work.slug}`} key={work._id}>
                          {work.mainImage && (<Image src={work.mainImage} alt={work.title} width={450} height={300} 
                          blurDataURL={work.lqip} placeholder="blur" loading="lazy" />)}
                        </Link>
                      </div>
                    ))}
                </>
       
  );
}