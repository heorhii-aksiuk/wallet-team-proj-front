import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

// import Button from '../Button'
import sprite from '../../assets/svg/sprite.svg'
import s from './LoginForm.module.css'

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Пароль должен состоять из более 2 символов')
    .max(12, 'Слишком длинный пароль')
    .required(),
})

const initialValues = { email: '', password: '' }

const onSubmit = (values) => {
  console.log('values', values)
}

const LoginForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: loginSchema,
  })

  return (
    <div className={s.container}>
      <div className={s.logo}>
        <svg className={s.logoIcon}>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      </div>

      <form className={s.form} onSubmit={formik.handleSubmit}>
        <label className={s.label}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className={s.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <svg width="24" height="24" className={s.inputIcon}>
            <use href={`${sprite}#icon-email`}></use>
          </svg>
        </label>

        {/* вывод ошибки */}
        {formik.touched.email && formik.errors.email}

        <label className={s.label}>
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className={s.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <svg width="24" height="24" className={s.inputIcon}>
            <use href={`${sprite}#icon-password`}></use>
          </svg>
        </label>

        {/* вывод ошибки */}
        {formik.touched.password && formik.errors.password}

        <button className={s.logBtn} type="submit">
          Вход
        </button>

        <button type="button" className={s.regBtn}>
          Регистрация
        </button>
      </form>
    </div>
  )
}

export default LoginForm
