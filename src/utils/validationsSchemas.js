import * as Yup from 'yup'

const loginSchema = Yup.object({
  email: Yup.string()
    .email('Неправильный имейл')
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Неправильный имейл',
    )
    .required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Пароль должен содержать 6 или более символов')
    .max(12, 'Пароль должен содержать не более 12 символов')
    .required('Обязательное поле'),
})

const singupSchema =  Yup.object({
    name: Yup
      .string()
      .typeError('Должно быть строкой')
      .required('Обязательное поле'),
    password: Yup
      .string()
      .min(4, 'Пароль должен быть длиннее 4 символов')
      .max(15, 'Пароль должен содержать не более 15 символов')
      .typeError('Должно быть строкой')
      .required('Обязательное поле'),
    confirmPassword: Yup
      .string()
      .oneOf([Yup.ref('password')], 'Пароли не совпадают'),
    email: Yup
      .string()
      .email('Введите верный email')
      .typeError('Должно быть строкой')
      .required('Обязательное поле'),
  })

export { loginSchema, singupSchema }
