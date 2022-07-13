import React from 'react';
import BrandArea from '../common/BrandArea';
import FooterThree from '../common/Footers/FooterThree';
import Footer from '../common/Footers/Footer';
import Header from '../common/Header';
import About from './About';
import Blog from './Blog';
import Cta from './Cta';
import HeroSlider from './HeroSlider';
import Portfolio from './Portfolio';
import Services from './Services';
import Testimonial from './Testimonial';
import VideoArea from './VideoArea';

const HomeFourMain = () => {
  return (
    <>
      <Header />
      <HeroSlider />
      <About />
      <Services />
      <VideoArea />
      <Portfolio />
      <Cta />
      <BrandArea hideTopBar={true} />
      <Testimonial />
      <Blog />
      <Footer />
      <FooterThree />
    </>
  );
};

export default HomeFourMain;