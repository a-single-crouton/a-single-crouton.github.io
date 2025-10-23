// import type { EmblaOptionsType } from 'embla-carousel';
import CarouselHeader from '../components/HomeComponents/CarouselComponents/CarouselHeader';
import CarouselFooter from '../components/HomeComponents/CarouselComponents/CarouselFooter';
import '../components/HomeComponents/CarouselComponents/embla-styles.css';
import RecentPostsCarousel from '../components/HomeComponents/CarouselComponents/RecentPostsCarousel';
import AnimationBanner from '../components/HomeComponents/AnimationBanner';

const HomePage = () => {
  return (
    <>
      <div className='hero-section'>
        <AnimationBanner
          src='/anim-block-shift.png'
          segmentWidth={1100} // exact CSS width of ONE segment
          height={600}
          durationSec={40}
          direction='left'
          className=''
        />
        <div className='anim-overlay'></div>
        <div className='landing-content'>
          <div className='hero-text'>
            <h1>Prototyped, designed, and built for people.</h1>
          </div>
        </div>
      </div>
      <CarouselHeader />
      <RecentPostsCarousel />
      <CarouselFooter />
      {/* <div className='home-page-grid'>
        <div className='home-column-one'>column-one</div>
        <div className='home-column-two'></div>
        <div className='home-column-three'>column-three</div>
      </div> */}
    </>
  );
};

export default HomePage;
