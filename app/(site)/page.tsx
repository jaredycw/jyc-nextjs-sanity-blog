import PreLoader from '../component/motionframe/preloader';
import MotionPost from '../component/motionframe/mpost';
import MotionHobby from '../component/motionframe/mhobby';
import MotionMovies from '../component/motionframe/mmovies';
import MotionWorks from '../component/motionframe/mworks';
import MotionExperiments from '../component/motionframe/mexps';
import HeroSection from '../component/hero/herosection';
import CraftSection from '../component/craftsection';
import PostSection from '../component/postsection';
import HobbySection from '../component/hobbysection';
import MovieSection from '../component/moviesection';
import WorkImage from '../component/workimage';
import ExperimentImage from '../component/expimage';

export default async function Page() {

  return(
 
      <div className="homepage">
        <PreLoader />
        <HeroSection/>
        <div className="container mx-auto"> 
          <MotionPost>
            <PostSection />
          </MotionPost>
          <MotionHobby>
            <HobbySection />
          </MotionHobby>
          <MotionMovies>
            <MovieSection />
          </ MotionMovies>
        </div>

          <div className="section-wrapper">  
            <MotionWorks>
              <WorkImage />
            </MotionWorks>
          </div>

          <div className="section-wrapper">
            <MotionExperiments>      
              <ExperimentImage />
            </MotionExperiments>     
          </div>
    
      </div>
 
  );

}

 
