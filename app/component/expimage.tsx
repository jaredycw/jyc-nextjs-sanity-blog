
import { getExps } from '@/sanity/sanity-utils';
import Link from 'next/link';
import Image from 'next/image';

export default async function ExperimentImage() {

    const exps = await getExps();
 
  return (
            <>
                {exps.map((exp) => (
                    <div className="slider-card" key={exp._id}>
                        <Link href={`/experiments/${exp.slug}`} key={exp._id} aria-label={`Read more ${exp.title}`}>
                            {exp.mainImage && (<Image src={exp.mainImage} alt={exp.title} width={800} height={1056} 
                            blurDataURL={exp.lqip} placeholder='blur' loading="lazy" />)}
                        </Link>
                    </div>
                ))}
            </>
  );
}