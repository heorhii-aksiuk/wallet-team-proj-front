import { NavLink } from 'react-router-dom'
import { ReactComponent as Homesvg } from '../../assets/svg/home.svg'
import { ReactComponent as Statissvg } from '../../assets/svg/statis.svg'
import { ReactComponent as Dollarsvg } from '../../assets/svg/dollar-icon.svg'
import Media from 'react-media'
import s from './Navigation.module.css'

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
            <Homesvg className={`${s.svg}`} />
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
            <Statissvg className={`${s.svg}`} />
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
                  <Dollarsvg className={`${s.svg}`} />
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
