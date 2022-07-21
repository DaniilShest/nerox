import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorMsg from '../common/ErrorMsg';

const JobDetailsArea = ({ item }) => {
  const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.name + "\n" + values.email + "\n" + values.msg}`);
    resetForm()
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      msg: ''
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Обязательное поле").label("Name"),
      email: Yup.string().required("Обязательное поле").email().label("Email"),
      msg: Yup.string().required("Обязательное поле").min(20).label("Message"),
    }),
    onSubmit: handleOnSubmit,
  })
  return (
    <>
      <div className="job-details-area pt-130 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="job-details-content">
                <h5 className="job-dtitle mt-45 mb-15">{item.title}</h5>
                <span className="job-sm-dtitle">{item.subtitle} </span>
                <div className="job-dtext-wrapper mt-50">
                  <p>Мы ищем {item.title}а, который присоединится к нашей команде из 14 человек.</p>
                  <p className="job-dtext mt-25">Наша цель — создавать продукты мирового класса, повышать уровень поддержки продуктов и исполнения, которую мы предоставляем нашим клиентам.
                  </p>
                </div>
                <div className="job-feature-list mt-30">
                  <ul>
                    {item.offer?.map((el, id) => (
                      <li key={id}><i className="fa-solid fa-circle-check"></i>{el}</li>
                    ))}
                  </ul>
                </div>
                <div className="job-feature-image w-img mt-55 mb-55">
                  <img src="../../assets/img/about/job-dimg.jpg" alt="job-details-img" />
                </div>
                <h5 className="privacy-title mb-20">Мы от тебя ожидаем :</h5>
                <div className="job-feature-list job-feature-list-2 mt-40">
                  <ul>
                    {item.requirements?.map((el, id) => (
                      <li key={id}><i className="fa-solid fa-circle-check"></i>{el}</li>
                    ))}
                  </ul>
                </div>
                <h5 className="privacy-title mb-20 mt-60">О Nerox</h5>
                <p>Наша миссия — искать и находить: точки роста, причинно-следственные связи, перспективные проекты, талантливых людей. Мы растём вместе с клиентами и строим нашу общую историю успеха. Анализируем каждый пиксель, байт и символ. Просеиваем бизнес-модели и решения через сито здравого смысла. Говорим всё как есть.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="job-details-contact mt-50 mb-20">
                <div className="contact__form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <input id='name' value={values.name} onChange={handleChange} onBlur={handleBlur}
                            type="text" placeholder="Ваше имя" />
                          {touched.name && <ErrorMsg error={errors.name} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <input id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" placeholder="Ваш Email" />
                          {touched.email && <ErrorMsg error={errors.email} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <textarea id='msg' value={values.msg} onChange={handleChange} onBlur={handleBlur} placeholder="Ваш отклик"></textarea>
                          {touched.msg && <ErrorMsg error={errors.msg} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__btn">
                          <button className="tp-solid-btn">Откликнуться</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailsArea;