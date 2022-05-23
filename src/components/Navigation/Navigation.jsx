import { NavLink } from 'react-router-dom'
import Media from 'react-media'
import s from './Navigation.module.css'
import sprite from '../../assets/svg/sprite.svg'

const Navigation = () => {
  return (
    <ul className={s.nav}>
      <li className={s.navItem}>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? s.navLinkActive : s.navLink
          }}
        >
          <div className={s.iconWrapper}>
            <svg className={s.svg}>
              <use href={`${sprite}#icon-home`}></use>
            </svg>
          </div>
          <span className={`${s.navText}`}>Главная</span>
        </NavLink>
      </li>
      <li className={s.navItem}>
        <NavLink
          to="statistics"
          className={({ isActive }) => {
            return isActive ? s.navLinkActive : s.navLink
          }}
        >
          <div className={s.iconWrapper}>
            <svg className={s.svg}>
              <use href={`${sprite}#icon-statistic`}></use>
            </svg>
          </div>
          <span className={`${s.navText}`}>Статистика</span>
        </NavLink>
      </li>

      <Media
        queries={{
          mobile: '(max-width: 767px)',
          //tablet: '(max-width: 768px)',
        }}
      >
        {(matches) =>
          matches.mobile && (
            <li className={s.navItem}>
              <NavLink
                to="currency"
                className={({ isActive }) => {
                  return isActive ? s.navLinkActive : s.navLink
                }}
              >
                <div className={s.iconWrapper}>
                  <svg className={s.svg}>
                    <use href={`${sprite}#icon-currency`}></use>
                  </svg>
                </div>
                <p className={s.navText}>Валюта</p>
              </NavLink>
            </li>
          )
        }
      </Media>
    </ul>
  )
}

export default Navigation
