import Link from 'next/link';

const Cta = ({ padd }) => {
  return (
    <>
      <div className={`tp-photograper-cta-2 pt-55 pb-55 ${padd ? padd : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-photograper-cta-wrapper text-center">
                <h3 className="tp-photograper-cta-title mb-20"><b>Не можете найти то, что ищете?</b></h3>
                <p>Мы всегда ищем людей с уникальными навыками. Отправьте нам свое резюме, и мы свяжемся с вами,<br />  когда у нас появится вакансия, соответствующая вашим ожиданиям.</p>
                <div className="tp-cta-btn mt-25">
                  <Link href="/contact"><a className="tp-solid-btn-square">Связаться с нами</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;