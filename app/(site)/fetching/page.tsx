import Link from "next/link";
import NowPlaying from "@/app/component/spotify/nowplaying";
import TopArtists from "@/app/component/spotify/topartist";
import TopTracks from "@/app/component/spotify/toptracks";
import BestSellerPart from "@/app/component/books/bestsellerpart";
import PopularArticlesPart from "@/app/component/books/populararticlespart";
import MovieReviewsPart from "@/app/component/books/moviereviewspart";
import HackerNewsWidget from "@/app/component/widgets/hackernewsblock";
import NewReleases from "@/app/component/spotify/newreleases";
import HKOWeatherWidget from "@/app/component/widgets/hkoblock";

export default function Fetching(){

 
    return (
       
        <div className="container mx-auto mb-10">
        <h1 className="text-center">Fetching API</h1>
        <ul className="text-center buttons-list">
            <Link href="#hko-section" aria-label="HKO Section"><li className="button">Weather</li></Link>
            <Link href="#spotify-section" aria-label="Spotify Section"><li className="button">Spotify</li></Link>
            <Link href="#hackernews-section" aria-label="HackerNews Section"><li className="button">Hacker News</li></Link>
            <Link href="#nyt-section" aria-label="New York Times Section"><li className="button">New York Times</li></Link>
            <Link href="#github-section" aria-label="Github Section (Coming Soon)"><li className="button">Github</li></Link>
            <Link href="/fetching/rss" aria-label="Fetching RSS"><li className="button">Fetching RSS</li></Link>
        </ul>
        <section id="hko-section" className="pt-28">
            <HKOWeatherWidget />
        </section>
        <section id="spotify-section" className="pt-10">
            <NowPlaying />
            <TopTracks/>
            <TopArtists/>
            <NewReleases />
        </section>
        <section id="hackernews-section" className="pt-10">
            <HackerNewsWidget />
        </section>
        <section id="nyt-section" className="pt-10">
            <BestSellerPart />
            <PopularArticlesPart />
            <MovieReviewsPart />
        </section>
        <section id="github-section" className="pt-10">
            Coming Soon
        </section>
        </div>
      
    )

}
