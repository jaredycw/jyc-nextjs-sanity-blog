import { getMovie } from "@/sanity/sanity-utils";
import Image from "next/image";
import PortableContent from "@/app/component/portablecontent";
import AuthorSection from "@/app/component/authorsection";
import HobbySection from "@/app/component/hobbysection";
import TagSection from "@/app/component/tagsection";
import MottoSection from "@/app/component/mottosection";
import NotFound from "../../not-found";
import SnsWidget from "@/app/component/snswidget";
import AdsPart from "@/app/component/adpart";


export default async function Movie({ params }: any){

  const slug = params.movie;
  const movie = await getMovie(slug);


  if (movie !== null) {
    return (
 
      <div className="container mx-auto hobbies-section">
        <div className="grid sm:grid-cols-7 grid-cols-2 gap-11">
        <div className="col-span-full md:col-span-2">
            <div className="hobbies-page-wrapper grid md:justify-items-center p-10">
                <div className="hobbies-list">
                        <Image src={movie.poster} alt={movie.title} width={150} height={220} className="post-wrapper-img"
                        blurDataURL={movie.lqip} placeholder="blur"
                        />
                    <ul className="hobbies-infor">
                      <li>Page: {movie.page}</li>
                      <li>Year: {movie.year}</li>
                      <li>Genre: {movie.genre}</li>
                      <li>Movie List: {movie.list}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-span-full md:col-span-5"> 
            <div className="md:pl-0 pl-5">
                <div className="hobbies-heading">
                  <div className="title"><h1>{movie.title}</h1></div>
                  <div className="creator">{movie.director}</div>
                </div>
                <div className="hobbies-heading-box">
                  <div className="post-infor-wrapper">
                      <div className="post-author">{movie.author}</div>
                      <div className="post-date">{movie.publishedOn}</div>
                      <div className="post-reading">{movie.estimatedReadingTime} mins</div>
                  </div>
                </div>

                <SnsWidget/>
                <div className="content mt-5">
                  <PortableContent content={movie.content} />
                </div>
            </div>

        </div>
        </div>
        <section className="page-featured">
        <AdsPart />
        
        <MottoSection />
        
        <TagSection categories={movie.categories} />
        <AuthorSection authorImage={movie.authorImage} author={movie.author} authorBio={movie.authorBio} authorLqip={movie.authorLqip} />
        <div className="page-hobbies">
          <div id="section-hobby">
            
            <HobbySection />
          </div>
        </div>
        </section>

        
      </div>
 
    )
  } else {
    
    return NotFound();
  }

}