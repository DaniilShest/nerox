import React from 'react';
import SEO from '../../components/seo';
import JobDetailsMain from '../../components/Job-details';
import { useRouter } from 'next/router';
import { jobListData } from '../../data/joblistData';
import { useState, useEffect } from 'react';

const JobDetails = () => {
  const router = useRouter();
  const [joblistItem, setJoblistItem] = useState({})
  const url = router.query.url;
  useEffect(() => {
    if (!url) {

    }
    else {
      setJoblistItem(jobListData.find(item => item.url == url))
    }
  }, [url])
  return (
    <>
      <SEO pageTitle={joblistItem.title} />
      <JobDetailsMain item={joblistItem} />
    </>
  );
};

export default JobDetails;