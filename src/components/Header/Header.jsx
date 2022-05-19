import Media from 'react-media'
import { mediaQueries } from '../../utils/constants'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUser } from '../../redux/session/session-selectors'
import s from './Header.module.css'
import sprite from '../../assets/svg/sprite.svg'

export default function Header() {
  const { name } = useSelector(getUser)
  const handleClick = () => console.log('on exit click') // Подключить модальное окно

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
          <Media queries={mediaQueries}>
            {(matches) =>
              (matches.tablet || matches.desktop) && (
                <svg className={s.lineSvg}>
                  <use href={`${sprite}#icon-vertical-line`}></use>
                </svg>
              )
            }
          </Media>
          <button className={s.button} onClick={handleClick} type="button">
            <svg className={s.exitSvg}>
              <use href={`${sprite}#icon-exit`}></use>
            </svg>
            <Media queries={mediaQueries}>
              {(matches) =>
                (matches.tablet || matches.desktop) && (
                  <p className={s.exit}>Выйти</p>
                )
              }
            </Media>
          </button>
        </div>
      </header>
    </>
  )
}
