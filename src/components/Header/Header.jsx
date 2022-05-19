import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUser } from '../../redux/session/session-selectors'
import s from './Header.module.css'
import sprite from '../../assets/svg/sprite.svg'

export default function Header() {
  const { name } = useSelector(getUser)
  const handleClick = () => console.log('exit click') // Подключить модальное окно

  return (
    <>
      <header className={s.header}>
        <div className={s.logoContainer}>
          <NavLink exact to="./">
            {/* Подставить путь главной страницы */}
            <svg className={s.logoSvg}>
              <use href={`${sprite}#icon-logo-full`}></use>
            </svg>
          </NavLink>
        </div>
        <div className={s.authContainer}>
          <p className={s.name}>{name ?? 'Имя'}</p>
          <svg className={s.lineSvg}>
            <use href={`${sprite}#icon-vertical-line`}></use>
          </svg>
          <button className={s.button} onClick={handleClick} type="button">
            <svg className={s.exitSvg}>
              <use href={`${sprite}#icon-exit`}></use>
            </svg>
            <p className={s.exit}>Выйти</p>
          </button>
        </div>
      </header>
    </>
  )
}
