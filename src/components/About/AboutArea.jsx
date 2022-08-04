import Link from 'next/link';

const AboutArea = () => {
  return (
    <>
      <div id="about-area" className="tpabout-area pt-140 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tpabout-content-2 pb-50">
                <h3 className="tpabout-xd-title mb-15"><b>NER</b> CREATIVE</h3>
                <span className="tpabout-xs-title mb-40">Веб-разработка для вашего бизнеса</span>
                <p className="tpab-text">
                  Мы начали путь в 2009 году как креативная юзабилити-студия. Каждый новый год, каждый клиент становились вызовами и давали стимул к развитию. Сейчас мы Brander — опытная команда разработчиков бизнес-решений.
                </p>
                <p>
                  Наша миссия — искать и находить: точки роста, причинно-следственные связи, перспективные проекты, талантливых людей. Мы растём вместе с клиентами и строим нашу общую историю успеха. Анализируем каждый пиксель, байт и символ. Просеиваем бизнес-модели и решения через сито здравого смысла. Говорим всё как есть.
                </p>
                <div className="tpabout-btn mt-50">
                  <Link href="/contact"><a className="tp-solid-btn">Связаться с нами</a></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpabout-image-2 pb-50">
                <img src="assets/img/about/tpabout-img.jpg" alt="about-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;