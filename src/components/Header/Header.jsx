import s from './Header.module.css'
import sprite from '../../assets/svg/sprite.svg'

export default function Header({ media }) {
  return (
    <>
      {media === 'mobile' ? (
        <header className={s.headerMobile}>
          <div className={s.logoContainerMobile}>
            <a href="./">
              <svg width="30" height="30">
                <use href={`${sprite}#icon-wallet`}></use>
              </svg>
            </a>
            <a className={s.logoMobile} href="./">
              Wallet
            </a>
          </div>
          <div className={s.authContainerMobile}>
            <p className={s.nameMobile}>Имя</p>
            <svg width="26" height="26">
              <use href={`${sprite}#icon-exit`}></use>
            </svg>
          </div>
        </header>
      ) : (
        <header className={s.header}>
          <div className={s.logoContainer}>
            <a href="./">
              <svg width="40" height="40">
                <use href={`${sprite}#icon-wallet`}></use>
              </svg>
            </a>
            <a className={s.logo} href="./">
              Wallet
            </a>
          </div>
          <div className={s.authContainer}>
            <p className={s.name}>Имя |</p>
            <svg className={s.svg} width="26" height="26">
              <use href={`${sprite}#icon-exit`}></use>
            </svg>
            <p className={s.name}>Выйти</p>
          </div>
        </header>
      )}
    </>
  )
}
