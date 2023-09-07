 
import NowPlaying from "@/app/component/spotify/nowplaying";
import TopArtists from "@/app/component/spotify/topartist";
import TopTracks from "@/app/component/spotify/toptracks";
import BestSellerPart from "@/app/component/books/bestsellerpart";
import PopularArticlesPart from "@/app/component/books/populararticlespart";
import MovieReviewsPart from "@/app/component/books/moviereviewspart";

export default function Test(){

 
    return (
       
        <div className="container mx-auto mb-10">
        testing API
         
         <TopTracks/>
         <TopArtists/>
         <NowPlaying />
         <BestSellerPart />
         <PopularArticlesPart />
         <MovieReviewsPart />

        </div>
      
    )

}
