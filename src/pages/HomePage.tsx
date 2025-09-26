// import type { EmblaOptionsType } from 'embla-carousel';
import Header from '../components/CarouselComponents/CarouselHeader';
import Footer from '../components/CarouselComponents/CarouselFooter';
import '../components/CarouselComponents/embla-styles.css';
import RecentPostsCarousel from '../components/CarouselComponents/RecentPostsCarousel';

const HomePage = () => {
  return (
    <>
      <Header />
      <RecentPostsCarousel />
      <Footer />
      <p>Homepage works!</p>
      {/* <div className='home-page-grid'>
        <div className='home-column-one'>column-one</div>
        <div className='home-column-two'></div>
        <div className='home-column-three'>column-three</div>
      </div> */}
    </>
  );
};

export default HomePage;
