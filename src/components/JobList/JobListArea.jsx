import Link from 'next/link';
import { jobListData } from '../../data/joblistData';

const JobListArea = () => {

  return (
    <>
      <div className="job-list-area pt-140">
        <div className="container">
          {
            jobListData.map(item => (
              <div key={item.id} className="job-list-item mb-50">
                <div className="row">
                  <div className="col-xxl-8 col-xl-7 col-lg-6">
                    <h5 className="job-list-title mb-30">
                      <Link href={`/careers/${item.url}`}>
                        <a>{item.title}</a>
                      </Link>
                    </h5>
                    <span className="job-name">Product Management </span>
                    <span className="job-state mt-100">
                      <Link href={`/careers/${item.url}`}>
                        <a>Ongoing</a>
                      </Link>
                    </span>
                  </div>
                  <div className="col-xxl-4 col-xl-5 col-lg-6">
                    <h5 className="job-list-sm-title mb-20">{item.subtitle}</h5>
                    <span className="job-sm-name mb-30">PLN 9 500 - 14 600 Gross (Employment Contract) </span>
                    <span className="job-type">Poland (Poznań or remote work)</span>
                    <div className="job-btn mt-40">
                      <Link href={`/careers/${item.url}`}>
                        <a className="tp-solid-btn-square">Apply now</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </>
  );
};

export default JobListArea;