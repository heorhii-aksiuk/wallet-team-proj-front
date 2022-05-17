import React, { useState } from 'react'

import sprite from '../../assets/svg/sprite.svg'
import s from './Table.module.css'

const back = [
  { id: 1, color: '#FED057', name: 'Основные расходы', quantity: '8700.00' },
  { id: 2, color: '#FFD8D0', name: 'Продукты', quantity: '3800.74' },
  { id: 3, color: '#FD9498', name: 'Машина', quantity: '1500.00' },
  { id: 4, color: '#C5BAFF', name: 'Забота о себе', quantity: '800.00' },
  { id: 5, color: '#6E78E8', name: 'Забота о детях', quantity: '2208.50' },
  { id: 6, color: '#4A56E2', name: 'Товары для дома', quantity: '300.00' },
  { id: 7, color: '#81E1FF', name: 'Образование', quantity: '3400.00' },
  { id: 8, color: '#24CCA7', name: 'Досуг', quantity: '1230.00' },
  { id: 9, color: '#00AD84', name: 'Другие расходы', quantity: '610.00' },
]
const date = {
  months: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Dec',
  ],
  years: ['2020', '2021', '2022'],
}

function Table() {
  const [selectedMonth, setSelectedMonth] = useState(null)
  const [selectedYear, setSelectedYear] = useState(null)
  const [monthsMenu, setMonthsMenu] = useState(false)
  const [yearsMenu, setYearsMenu] = useState(false)

  const openMonthMenu = () => {
    setMonthsMenu(true)
  }
  const closeMonthsMenu = (e) => {
    e.stopPropagation()
    setMonthsMenu(false)
  }
  const changeMonth = (e, month) => {
    e.stopPropagation()
    setSelectedMonth(month)
    setMonthsMenu(false)
  }
  const removeMonth = (e) => {
    e.stopPropagation()
    setSelectedMonth(null)
    setMonthsMenu(false)
  }

  const openYearMenu = () => {
    setMonthsMenu(false)
    setYearsMenu(true)
  }
  const closeYearsMenu = (e) => {
    e.stopPropagation()
    setYearsMenu(false)
  }
  const changeYear = (e, year) => {
    e.stopPropagation()
    setSelectedYear(year)
    setYearsMenu(false)
  }
  const removeYear = (e) => {
    e.stopPropagation()
    setSelectedYear(null)
    setYearsMenu(false)
  }

  const normalizeNum = (str) => {
    return str.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
  }

  return (
    <div className={s.tableContainer}>
      {monthsMenu && (
        <div className={s.backdrop} onClick={(e) => closeMonthsMenu(e)}></div>
      )}

      {yearsMenu && (
        <div className={s.backdrop} onClick={(e) => closeYearsMenu(e)}></div>
      )}

      <ul className={s.menu}>
        <li className={s.item} onClick={() => openMonthMenu()}>
          {selectedMonth ?? 'Месяц'}
          <svg className={s.itemIcon}>
            <use href={`${sprite}#icon-arrow`} x={10}></use>
          </svg>
          {monthsMenu && (
            <ul className={s.subMenu}>
              {date.months.map((month, index) => (
                <li
                  key={index}
                  className={s.subItem}
                  onClick={(e) => changeMonth(e, month)}
                >
                  {month}
                </li>
              ))}
              {selectedMonth && (
                <li className={s.subItem} onClick={(e) => removeMonth(e)}>
                  Очистить
                </li>
              )}
            </ul>
          )}
        </li>

        <li className={s.item} onClick={() => openYearMenu()}>
          {selectedYear ?? 'Год'}
          <svg className={s.itemIcon}>
            <use href={`${sprite}#icon-arrow`} x={10}></use>
          </svg>
          {yearsMenu && (
            <ul className={s.subMenu}>
              {date.years.map((year, index) => (
                <li
                  key={index}
                  className={s.subItem}
                  onClick={(e) => changeYear(e, year)}
                >
                  {year}
                </li>
              ))}
              {selectedYear && (
                <li className={s.subItem} onClick={(e) => removeYear(e)}>
                  Очистить
                </li>
              )}
            </ul>
          )}
        </li>
      </ul>

      <div className={s.tableHead}>
        <p>Категория</p>
        <p>Сумма</p>
      </div>

      <ul className={s.tableBody}>
        {back.map((operation, index) => (
          <li key={index} className={s.tableItem}>
            <div>
              <svg width={24} height={24} className={s.tableItemSvg}>
                <rect
                  width={24}
                  height={24}
                  fill={operation.color}
                  rx={2}
                ></rect>
              </svg>
              <p className={s.tableItemName}>{operation.name}</p>
            </div>
            <p className={s.tableItemQuantity}>
              {normalizeNum(operation.quantity)}
            </p>
          </li>
        ))}
      </ul>

      <div className={`${s.sum} ${s.expenses}`}>
        Расходы:<span>22 549.24</span>
      </div>
      <div className={`${s.sum} ${s.income}`}>
        Доходы:<span>27 350.00</span>
      </div>
    </div>
  )
}

export default Table
