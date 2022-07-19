import Link from 'next/link';

const About = () => {
  return (
    <>
      <div className="tpbs-about-area pt-120 pb-120 p-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5">
              <div className="tpbs-about-image s-about-img-2">
                <div className="s-about-img-2-inner p-relative fix">
                  <img src="assets/img/about/abr-img.jpg" alt="about-img" />
                  <img className="about-shape-1" src="assets/img/about/about-shape-1.png" alt="" />
                </div>
                <img className="about-shape-2" src="assets/img/about/about-shape-2.png" alt="" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="tps-about tps-about-wrap">
                <div className="tpbs-section-wrapper mb-30">
                  <span className="tpbs-sub-title mb-15">О нас</span>
                  <h3 className="tpbs-title">Мы предоставляем<br /> полный услуг веб-разработки.</h3>
                </div>
                <p className="ab-text mb-30">Мы собрали команду лучших разработчиков, чтобы заказчики всегда были довольны! Вы можете доверить специалистам организации любую работу, связанную с веб-разработкой.</p>
                <div className="features__list">
                  <ul>
                    <li className="d-flex align-items-center">
                      <div className="features__list-icon mr-10">
                        <i className="far fa-check"></i>
                      </div>
                      <div className="features__list-text">
                        <p>Мы предлагаем идеальные решения</p>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="features__list-icon mr-10">
                        <i className="far fa-check"></i>
                      </div>
                      <div className="features__list-text">
                        <p>Работаем с мировыми брендами</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tpbs-button mt-50">
                  <Link href="/about">
                    <a className="tp-solid-btn">Узнать подробнее</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tpbs-ab-shape fix">
          <img src="assets/img/about/ab-shape.png" alt="shape" />
        </div>
      </div>
    </>
  );
};

export default About;