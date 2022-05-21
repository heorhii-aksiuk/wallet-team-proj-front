import * as Yup from 'yup'

export const loginSchema = Yup.object({
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

export const singupSchema = Yup.object({
  name: Yup.string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(4, 'Пароль должен быть длиннее 4 символов')
    .max(15, 'Пароль должен содержать не более 15 символов')
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
  repeatPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Пароли не совпадают',
  ),
  email: Yup.string()
    .email('Введите верный email')
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
})

export const transactionSchema = Yup.object({
  typeTransaction: Yup.boolean().required(),
  sum: Yup.number().required(),
  date: Yup.string().required(),
  description: Yup.string(),
  category: Yup.string(),
})
