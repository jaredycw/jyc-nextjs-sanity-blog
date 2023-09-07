
import { getExps } from '@/sanity/sanity-utils';
import { Exp } from '@/types/Exp';
import Link from 'next/link';
import Image from 'next/image';

export default async function ExperimentImage() {

    const exps = await getExps();
 
  return (
            <>
                {exps.map((exp) => (
                    <div className="slider-card" key={exp._id}>
                        <Link href={`/experiments/${exp.slug}`} key={exp._id}>
                            {exp.mainImage && (<Image src={exp.mainImage} alt={exp.title} width={450} height={300} 
                            blurDataURL={exp.lqip} placeholder='blur' loading="lazy" />)}
                        </Link>
                    </div>
                ))}
            </>
  );
}