import { React, useState } from 'react'
import { useHistory } from 'react-router-dom'
import PasswordStrength from './PasswordStrength'
import { sessionOperations } from '../../redux/session'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { singupSchema } from '../../utils/validationsSchemas'
import sprite from '../../assets/svg/sprite.svg'
import s from './RegistrationForm.module.css'

const RegistrationForm = () => {
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  }
  const [password, setPassword] = useState('')
  const history = useHistory()

  const onSubmit = (values) => {
    sessionOperations.signUp({ values })
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
              name="confirmPassword"
              placeholder="Подтвердите пароль"
              className={s.input}
            />

            <svg width="24" height="24" className={s.inputIcon}>
              <use href={`${sprite}#icon-password`}></use>
            </svg>

            <ErrorMessage
              name="confirmPassword"
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
          <button className={s.logBtn} type="submit" onSubmit={onSubmit}>
            Вход
          </button>
          <Link to="/login" className={s.regBtn}>
            Регистрация
          </Link>
        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationForm
