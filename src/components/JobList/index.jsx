import React from 'react';
import BrandArea from '../common/BrandArea';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../common/Cta';
import Footer from '../common/Footer';
import Header from '../common/Header';
import JobListArea from './JobListArea';

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Вакансии" subtitle="Вакансии" />
      <JobListArea />
      <Cta />
      <BrandArea padd="job-list" />
      <Footer />
    </>
  );
};

export default index;