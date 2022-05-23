import Media from 'react-media'
import { mediaQueries } from '../../utils'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/session/session-selectors'
import { openModalLogout } from '../../redux/globall/global-actions'
import s from './Header.module.css'
import sprite from '../../assets/svg/sprite.svg'

export default function Header() {
  const dispatch = useDispatch()
  const { name } = useSelector(getUser)

  return (
    <>
      <header className={s.header}>
        <div className={s.mainContainer}>
          <div className={s.logoContainer}>
            <NavLink exact to="./">
              <svg className={s.logoSvg}>
                <use href={`${sprite}#icon-logo-full`}></use>
              </svg>
            </NavLink>
          </div>
          <div className={s.authContainer}>
            <p className={s.name}>{name}</p>
            <Media queries={mediaQueries}>
              {(matches) =>
                (matches.tablet || matches.desktop) && (
                  <svg className={s.lineSvg}>
                    <use href={`${sprite}#icon-vertical-line`}></use>
                  </svg>
                )
              }
            </Media>
            <button
              className={s.button}
              onClick={() => dispatch(openModalLogout())}
              type="button"
            >
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
        </div>
      </header>
    </>
  )
}
