import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import Button from '../Button'
import { sessionOperations } from '../../redux/session'
import { loginSchema } from '../../utils'
import sprite from '../../assets/svg/sprite.svg'
import s from './LoginForm.module.css'

const LoginForm = () => {
  const initialValues = { email: '', password: '' }

  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = (values, onSubmitProps) => {
    dispatch(sessionOperations.logIn(values))
    // console.log(values)

    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
  }
  const onRegistrationBtn = () => {
    history.push('/registration')
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

              <ErrorMessage
                name="password"
                component="p"
                className={s.validErrorMes}
              />
            </label>

            <Button
              title="Вход"
              type="submit"
              onSubmit={onSubmit}
              className={s.submitBtn}
            />

            <Button
              title="Регистрация"
              type="button"
              typeButton="secondary"
              onClick={onRegistrationBtn}
              className={s.registerBtn}
            />
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default LoginForm
