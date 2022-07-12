import React from 'react';
import BrandArea from '../common/BrandArea';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../common/Cta';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import Blog from '../Home/Blog';
import Testimonial from '../Home/Testimonial';
import ServicesBanner from './ServicesBanner';
import ServicesList from './ServicesList';

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="OUR SERVICES" subtitle="Services" />
      <ServicesList />
      <ServicesBanner />
      <Testimonial padd="services-padd" />
      <Cta padd="services-padd-cta" />
      <Blog padd="services-blog-padd" />
      <BrandArea padd="services-brand" />
      <FooterTwo />
    </>
  );
};

export default index;