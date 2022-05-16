import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Button from '../Button'
import sprite from '../../assets/svg/sprite.svg'
import s from './LoginForm.module.css'

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Пароль должен состоять из более 2 символов')
    .max(12, 'Слишком длинный пароль')
    .required(),
})

const LoginForm = () => {
  const [user, setUser] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('qweqweqwe')
  }

  return (
    <div className={s.container}>
      <div className={s.logo}>
        <svg className={s.logoIcon}>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      </div>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignupSchema}
        // onSubmit={(values) => {
        //   console.log(values)
        // }}
        handleChange={({ target }) => {
          setUser(target)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          // handleSubmit,
          isSubmitting,
        }) => (
          <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label}>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className={s.input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <svg width="24" height="24" className={s.inputIcon}>
                <use href={`${sprite}#icon-email`}></use>
              </svg>
            </label>

            {/* вывод ошибки */}
            {errors.email && touched.email && errors.email}

            <label className={s.label}>
              <input
                type="password"
                name="password"
                placeholder="Пароль"
                className={s.input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <svg width="24" height="24" className={s.inputIcon}>
                <use href={`${sprite}#icon-password`}></use>
              </svg>
            </label>

            {/* вывод ошибки */}
            {errors.password && touched.password && errors.password}

            <button className={s.logBtn} type="submit" disabled={isSubmitting}>
              Вход
            </button>

            <button type="button" className={s.regBtn}>
              Регистрация
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm
