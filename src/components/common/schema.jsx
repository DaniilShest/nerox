import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required("Обязательное поле").label("Имя"),
  email: Yup.string().required("Обязательное поле").email().label("Email"),
  msg: Yup.string().required("Обязательное поле").min(20).label("Сообщение"),
});

export default schema;