import { useSelector } from 'react-redux'
import { getUser } from '../../redux/session/session-selectors'
import s from './Header.module.css'
import sprite from '../../assets/svg/sprite.svg'

export default function Header() {
  const { name } = useSelector(getUser)
  return (
    <>
      <header className={s.header}>
        <div className={s.logoContainer}>
          <a href="./">
            <svg className={s.logoSvg}>
              <use href={`${sprite}#icon-logo-full`}></use>
            </svg>
          </a>
        </div>
        <div className={s.authContainer}>
          <p className={s.name}>{name ?? 'Имя'}</p>
          <svg className={s.lineSvg}>
            <use href={`${sprite}#icon-vertical-line`}></use>
          </svg>
          <a href="./">
            <svg className={s.exitSvg}>
              <use href={`${sprite}#icon-exit`}></use>
            </svg>
            <p className={s.exit}>Выйти</p>
          </a>
        </div>
      </header>
    </>
  )
}
