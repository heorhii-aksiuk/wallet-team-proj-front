import Media from 'react-media'
import { mediaQueries } from '../../utils'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'
import sprite from '../../assets/svg/sprite.svg'

const Navigation = () => {
  return (
    <ul className={s.nav}>
      <li className={s.navItem}>
        <NavLink
          exact
          to="/"
          className={s.navLink}
          activeClassName={s.navLinkActive}
        >
          <div className={s.iconWrapper}>
            <svg className={s.svg}>
              <use href={`${sprite}#icon-home`}></use>
            </svg>
          </div>
          <span className={s.navText}>Главная</span>
        </NavLink>
      </li>
      <li className={s.navItem}>
        <NavLink
          to="statistics"
          className={s.navLink}
          activeClassName={s.navLinkActive}
        >
          <div className={s.iconWrapper}>
            <svg className={s.svg}>
              <use href={`${sprite}#icon-statistic`}></use>
            </svg>
          </div>
          <span className={s.navText}>Статистика</span>
        </NavLink>
      </li>

      <Media queries={mediaQueries}>
        {(matches) =>
          (matches.mobile || matches.response) && (
            <li className={s.navItem}>
              <NavLink
                to="currency"
                className={s.navLink}
                activeClassName={s.navLinkActive}
              >
                <div className={s.iconWrapper}>
                  <svg className={s.svg}>
                    <use href={`${sprite}#icon-currency`}></use>
                  </svg>
                </div>
              </NavLink>
            </li>
          )
        }
      </Media>
    </ul>
  )
}

export default Navigation
