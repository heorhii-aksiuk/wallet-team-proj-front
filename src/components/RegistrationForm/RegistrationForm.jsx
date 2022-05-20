import { React, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import PasswordStrength from './PasswordStrength'
import Button from '../Button'
import { sessionOperations } from '../../redux/session'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { singupSchema } from '../../utils/validationsSchemas'
import sprite from '../../assets/svg/sprite.svg'
import s from './RegistrationForm.module.css'

const RegistrationForm = () => {
  const initialValues = {
    email: '',
    password: '',
    repeatPassword: '',
    name: '',
  }
  const [password, setPassword] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  const onSubmit = (values) => {
    dispatch(sessionOperations.signUp(values))
    history.push('/login')
  }

  const onLoginBtn = () => {
    history.push('/login')
  }

  return (
    <div className={s.container}>
      <div className={s.logo}>
        <svg className={s.logoIcon}>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={singupSchema}
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
              onInput={(e) => setPassword(e.target.value)}
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
          <label className={s.label}>
            <Field
              type="password"
              name="repeatPassword"
              placeholder="Подтвердите пароль"
              className={s.input}
            />

            <svg width="24" height="24" className={s.inputIcon}>
              <use href={`${sprite}#icon-password`}></use>
            </svg>

            <ErrorMessage
              name="repeatPassword"
              component="p"
              className={s.validErrorMes}
            />
          </label>
          <PasswordStrength password={password} />
          <label className={s.label}>
            <Field
              type="text"
              name="name"
              placeholder="Ваше имя"
              className={s.input}
            />

            <svg width="24" height="24" className={s.inputIcon}>
              <use href={`${sprite}#icon-password`}></use>
            </svg>

            <ErrorMessage
              name="name"
              component="p"
              className={s.validErrorMes}
            />
          </label>

          <Button title="Начать" type="submit" className={s.submitBtn} />

          <Button
            title="Войти"
            type="button"
            typeButton="secondary"
            onClick={onLoginBtn}
            className={s.loginBtn}
          />
        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationForm
