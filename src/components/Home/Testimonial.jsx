import React from 'react';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      img: 'assets/img/testimonial/3/ts-1.jpg',
      desc: <>“Я ценю ваши замечательные услуги и профессиональный персонал за всю вашу тяжелую работу и творческое мышление! Было весело, и я надеюсь, что скоро снова поработаю с вами.“</>,
      name: 'Смирнов Дмитрий'
    },
    {
      id: 2,
      img: 'assets/img/testimonial/3/ts-2.jpg',
      desc: <>“В оговоренные сроки мы получили готовый сайт, отвечающий всем нашим требованиям, и синхронизированный со специфичными модулями для сферы туризма. Уже на протяжении полугода мы получаем заявки клиентов с сайта, затраты на сайт окупились в течение первого месяца.“</>,
      name: 'Ковалев Даниил'
    },
    {
      id: 3,
      img: 'assets/img/testimonial/3/ts-3.jpg',
      desc: <>“В 2021 году мы обратились в агентство Nerox для разработки СЕО сайта для нашей международной транспортной компании Nerox. В результате мы получили удобный и современный сайт с уникальными текстами в оговоренные сроки, а также настройку контекстной рекламы. Мы рекомендуем агентство нашим партнерам и филиалам в других странах.“</>,
      name: 'Волков Игорь'
    },
  ]
  return (
    <>
      <div className="tpbs-testimonial-area tpbs-ts-overlay" style={{ backgroundImage: `url(assets/img/testimonial/3/testimonial-bg.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="tpbs-noise-bg" style={{ backgroundImage: `url(assets/img/testimonial/3/noise-bg.png)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="container">
          <div className="tpbs-ts-wrapper">
            <div className="tpbs-testimonial-slider tpbs-ts-slider-active">

              <Swiper
                modules={[Pagination]}
                className="pb-80"
                spaceBetween={25}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000 }}
              >
                {testimonialData.slice(0, 6).map(item => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className="tpbs-slider-item text-center">
                        <div className="tpbs-author-image mb-50">
                          <img src={item.img} alt="client-img" />
                        </div>
                        <div className="tpbs-quote mb-30">
                          <i className="fa-solid fa-quote-left"></i>
                        </div>
                        <div className="tpbs-review mb-40">
                          <p>{item.desc}</p>
                        </div>
                        <span className="tpbs-client-name">{item.name}</span>
                      </div>
                    </SwiperSlide>
                  )
                })
                }
              </Swiper>

            </div>
          </div>
        </div>
        <div className="tpbs__shape tpbs__shape-1">
          <img src="assets/img/shape/shape-1.png" alt="shape-1" />
        </div>
        <div className="tpbs__shape tpbs__shape-4">
          <img src="assets/img/shape/shape-2.png" alt="shape-1" />
        </div>
        <div className="tpbs__shape tpbs__shape-3">
          <img src="assets/img/shape/shape-3.png" alt="shape-1" />
        </div>
      </div>
    </>
  );
};

export default Testimonial;