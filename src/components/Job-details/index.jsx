import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import JobDetailsArea from './JobDetailsArea';

const index = ({ item }) => {
  return (
    <>
      <Header dynamic={true} />
      <Breadcrumb title={item.title} subtitle={item.title} dynamic={"/" + "assets/img/breadcrumb/breadcrumb-bg-1.jpg"} />
      <JobDetailsArea item={item} />
      <FooterTwo />
    </>
  );
};

export default index;