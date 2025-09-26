// import type { EmblaOptionsType } from 'embla-carousel';
import CarouselHeader from '../components/CarouselComponents/CarouselHeader';
import CarouselFooter from '../components/CarouselComponents/CarouselFooter';
import '../components/CarouselComponents/embla-styles.css';
import RecentPostsCarousel from '../components/CarouselComponents/RecentPostsCarousel';

const HomePage = () => {
  return (
    <>
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
