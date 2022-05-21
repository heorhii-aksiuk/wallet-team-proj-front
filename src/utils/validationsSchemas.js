import * as Yup from 'yup'

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Неправильный email')
    .matches(
      /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
      'Неправильный email',
    )
    .required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Пароль должен содержать 6 или более символов')
    .max(16, 'Пароль должен содержать не более 16 символов')
    .required('Обязательное поле'),
})

export const singupSchema = Yup.object({
  name: Yup.string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Пароль должен быть длиннее 6 символов')
    .max(16, 'Пароль должен содержать не более 16 символов')
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
