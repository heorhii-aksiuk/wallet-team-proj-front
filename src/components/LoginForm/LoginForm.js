import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

// import Button from '../Button'
import { loginSchema } from '../../utils/validationsSchemas'
import sprite from '../../assets/svg/sprite.svg'
import s from './LoginForm.module.css'

const LoginForm = () => {
  const initialValues = { email: '', password: '' }

  const onSubmit = (values, onSubmitProps) => {
    console.log(values)

    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
  }

  return (
    <div className={s.desktopContainer}>
      <div className={s.container}>
      <div className={s.logo}>
        <svg className={s.logoIcon}>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
        validateOnChange={false}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <Field
              type="email"
              name="email"
              placeholder="E-mail"
              className={s.input}
            />

            <svg width="24" height="24" className={s.inputIcon}>
              <use href={`${sprite}#icon-email`}></use>
            </svg>

            {/* вывод ошибки */}
            <ErrorMessage
              name="email"
              component="p"
              className={s.validErrorMes}
            />
          </label>

          <label className={s.label}>
            <Field
              type="password"
              name="password"
              placeholder="Пароль"
              className={s.input}
            />

            <svg width="24" height="24" className={s.inputIcon}>
              <use href={`${sprite}#icon-password`}></use>
            </svg>

            {/* вывод ошибки */}
            <ErrorMessage
              name="password"
              component="p"
              className={s.validErrorMes}
            />
          </label>

          <button className={s.logBtn} type="submit">
            Вход
          </button>

          <button type="button" className={s.regBtn}>
            Регистрация
          </button>
        </Form>
      </Formik>
    </div>
    </div>
  )
}

export default LoginForm
