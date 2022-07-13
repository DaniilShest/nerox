import React from 'react';
import BrandArea from '../common/BrandArea';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../common/Cta';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import JobListArea from './JobListArea';

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Careers" subtitle="Careers" />
      <JobListArea />
      <Cta />
      <BrandArea padd="job-list" />
      <FooterTwo />
    </>
  );
};

export default index;