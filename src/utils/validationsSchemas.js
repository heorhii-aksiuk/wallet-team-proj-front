import * as Yup from 'yup'

const loginSchema = Yup.object({
  email: Yup.string()
    .email('Неправильный имейл')
    .matches(
      /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
      'Неправильный имейл',
    )
    .required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Пароль должен содержать 6 или более символов')
    .max(12, 'Пароль должен содержать не более 12 символов')
    .required('Обязательное поле'),
})

export { loginSchema }
