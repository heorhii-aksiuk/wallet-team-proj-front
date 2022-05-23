import React from 'react'
import Media from 'react-media'

import LoginForm from '../../components/LoginForm'
import { mediaQueries } from '../../utils'
import signinImg from '../../assets/img/signin-img.png'
import s from './LoginPage.module.css'

const LoginPage = () => {
  return (
    <div className={s.container}>
      <Media queries={mediaQueries}>
        {(matches) => (
          <>
            {matches.tablet && (
              <div className={s.loginImgWrapper}>
                <img
                  src={signinImg}
                  alt="Человек с тележкой продуктов"
                  width="274px"
                  height="250px"
                  className={s.signinImg}
                />
                <p className={s.appTitle}>Finance App</p>
              </div>
            )}
            {matches.desktop && (
              <div className={s.loginImgWrapper}>
                <img
                  src={signinImg}
                  alt="Человек с тележкой продуктов"
                  width="452px"
                  height="413px"
                  className={s.signinImg}
                />
                <p className={s.appTitle}>Finance App</p>
              </div>
            )}
          </>
        )}
      </Media>

      <div className={s.form}>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
