import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import Footer from '../common/Footer';
import Header from '../common/Header';
import BlogDetailsArea from './BlogDetailsArea';

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Blog Details" subtitle="Blog Details" />
      <BlogDetailsArea />
      <Footer />
    </>
  );
};

export default index;