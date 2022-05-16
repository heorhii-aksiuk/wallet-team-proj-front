import { React, useState } from 'react'
import PasswordStrength from './PasswordStrength'
import { Formik } from 'formik'
import * as yup from 'yup'
import sprite from '../../assets/svg/sprite.svg'
import s from './RegistrationForm.module.css'

const RegistrationForm = () => {
  const [password, setPassword] = useState('')

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Обязательное поле'),
    password: yup
      .string()
      .min(4, 'Пароль должен быть длиннее 4 символов')
      .max(15, 'Пароль должен содержать не более 15 символов')
      .typeError('Должно быть строкой')
      .required('Обязательное поле'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Пароли не совпадают'),
    email: yup
      .string()
      .email('Введите верный email')
      .typeError('Должно быть строкой')
      .required('Обязательное поле'),
  })

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          name: '',
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className={s.formContainer}>
            <div className={s.desktopContainer}>
              <div className={s.authForm}>
                <div className={s.logo}>
                  <svg className={s.logoIcon}>
                    <use href={`${sprite}#icon-logo`}></use>
                  </svg>
                </div>

                <div className={s.form}>
                  <label className={s.authLabel}>
                    <input
                      className={s.input}
                      placeholder="E-mail"
                      name={'email'}
                      type={'email'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    ></input>
                    <svg width="24" height="24" className={s.inputIcon}>
                      <use href={`${sprite}#icon-email`}></use>
                    </svg>
                  </label>
                  {touched.email && errors.email && (
                    <p className={s.error}>{errors.email}</p>
                  )}

                  <label className={s.authLabel}>
                    <input
                      id="inputcheck"
                      className={s.input}
                      placeholder="Пароль"
                      name={'password'}
                      type={'password'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      onInput={(e) => setPassword(e.target.value)}
                    ></input>
                    <svg width="24" height="24" className={s.inputIcon}>
                      <use href={`${sprite}#icon-password`}></use>
                    </svg>
                  </label>
                  {touched.password && errors.password && (
                    <p className={s.error}>{errors.password}</p>
                  )}

                  <label className={s.authLabel}>
                    <input
                      id="inputcheck"
                      className={s.input}
                      placeholder="Подтвердите пароль"
                      name={'confirmPassword'}
                      type={'password'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                    ></input>
                    <svg width="24" height="24" className={s.inputIcon}>
                      <use href={`${sprite}#icon-password`}></use>
                    </svg>
                  </label>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <p className={s.errorConfirm}>{errors.confirmPassword}</p>
                  )}
                  <div className={s.progressBar}>
                    <PasswordStrength password={password} />
                  </div>

                  <div id="check"></div>

                  <label className={s.authLabel}>
                    <input
                      type={'text'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={s.input}
                      placeholder="Ваше имя"
                      name={'name'}
                    ></input>
                    <svg width="24" height="24" className={s.inputIcon}>
                      <use href={`${sprite}#icon-account`}></use>
                    </svg>
                  </label>
                  {touched.name && errors.name && (
                    <p className={s.error}>{errors.name}</p>
                  )}
                  <button
                    type={'submit'}
                    className={s.regBtn}
                    disabled={!isValid && !dirty}
                    onClick={handleBlur}
                  >
                    регистрация
                  </button>

                  <button className={s.logBtn} type="submit">
                    вход
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default RegistrationForm
