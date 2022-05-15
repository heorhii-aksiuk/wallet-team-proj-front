import React, { useState } from 'react'

import Button from '../Button'
import sprite from '../../assets/svg/sprite.svg'
import s from './LoginForm.module.css'

const LoginForm = () => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleChange = ({ target: { name, value } }) => {
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(user)

    setUser({ email: '', password: '' })
  }

  return (
    <div className={s.container}>
      <div className={s.logo}>
        <svg className={s.logoIcon}>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
      </div>

      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <input
            className={s.input}
            placeholder="E-mail"
            name="email"
            value={user.email}
            onChange={handleChange}
          ></input>

          <svg width="24" height="24" className={s.inputIcon}>
            <use href={`${sprite}#icon-email`}></use>
          </svg>
        </label>

        <label className={s.label}>
          <input
            className={s.input}
            placeholder="Пароль"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
          ></input>

          <svg width="24" height="24" className={s.inputIcon}>
            <use href={`${sprite}#icon-password`}></use>
          </svg>
        </label>

        <button className={s.logBtn} type="submit">
          вход
        </button>

        <button type="button" className={s.regBtn}>
          регистрация
        </button>
      </form>
    </div>
  )
}

export default LoginForm
