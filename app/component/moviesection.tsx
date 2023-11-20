import { getMovies } from '@/sanity/sanity-utils';
import Link from 'next/link';
import Image from 'next/image';

export default async function MovieSection() {
    const movies = await getMovies();

  return (
            <div>
                <div className="hobby-title">Best Films Watched in 2023</div>
                <div className="watching-wrapper">
                    {movies.map((movie : any) => (
                    <div key={movie._id}>
                        <Link href={movie.link} key={movie._id} target="_blank" aria-label={`Read more ${movie.link}`}>
                        {movie.poster && (<Image src={movie.poster} alt={movie.title} width={224} height={333} loading="lazy" className="post-wrapper-img"
                        blurDataURL={movie.lqip} placeholder="blur" />)}
                        </Link>
                    </div>
                    ))}
                </div>
            </div>
  );
}
