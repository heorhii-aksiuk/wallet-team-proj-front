import React from 'react';
import sprite from '../../assets/svg/sprite.svg'
import s from './LoginForm.module.css'


const LoginForm = () => {

  return (
    <div className={s.container}>
      <div className={s.desktopContainer}>
        <div className={s.authForm}>
          <div className={s.logo}>

             <svg className={s.logoIcon}>
            <use href={`${sprite}#icon-logo`}></use>
              </svg>
          </div>

          <form className={s.form}>
            <label className={s.authLabel}>
              <input
                className={s.input}
                placeholder="E-mail"
                name="email"
                          ></input>
                          <svg width="24" height="24" className={s.inputIcon}>
            <use href={`${sprite}#icon-email`}></use>
              </svg>
            </label>

            <label className={s.authLabel}>
              <input
                className={s.input}
                placeholder="Пароль"
                name="password"
                type="password"
              ></input>
              <svg width="24" height="24" className={s.inputIcon}>
               <use href={`${sprite}#icon-password`}></use>
              </svg>
            </label>

            <button className={s.logBtn} type="submit">
              вход
            </button>

              <button type="submit" className={s.regBtn}>
                регистрация
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm