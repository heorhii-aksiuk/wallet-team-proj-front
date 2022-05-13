import s from './Header.module.css'
import sprite from '../../assets/svg/sprite.svg'

export default function Header({ media }) {
  return (
    <>
      {media === 'desktop' ? (
        <header>Header desktop</header>
      ) : (
        <header className={s.header}>
          <div className={s.logoContainer}>
            <a href="./">
              <svg width="30" height="30">
                <use href={`${sprite}#icon-wallet`}></use>
              </svg>
            </a>
            <a className={s.logo} href="./">
              Wallet
            </a>
          </div>
          <div className={s.authContainer}>
            <p className={s.name}>Имя</p>
            <svg className={s.svg} width="26" height="26">
              <use href={`${sprite}#icon-exit`}></use>
            </svg>
          </div>
        </header>
      )}
    </>
  )
}
