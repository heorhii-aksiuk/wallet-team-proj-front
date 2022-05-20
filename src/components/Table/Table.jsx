import React, { useEffect, useState } from 'react'

import { getPeriodStatistics } from '../../services'
import sprite from '../../assets/svg/sprite.svg'
import s from './Table.module.css'

function Table({ statistics, setStartDate, setEndDate }) {
  const [selectedMonth, setSelectedMonth] = useState(null)
  const [selectedYear, setSelectedYear] = useState(null)
  const [monthsMenu, setMonthsMenu] = useState(false)
  const [yearsMenu, setYearsMenu] = useState(false)

  const { monthsList, yearsList, startDate, endDate } = getPeriodStatistics(
    selectedMonth,
    selectedYear,
  )

  useEffect(() => {
    setStartDate(startDate)
    setEndDate(endDate)
  }, [startDate, endDate, setStartDate, setEndDate])

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

    if (!selectedYear) {
      setSelectedYear('2022')
    }
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
          {selectedMonth ? selectedMonth.name : 'Месяц'}
          <svg className={s.itemIcon}>
            <use href={`${sprite}#icon-arrow`} x={10}></use>
          </svg>
          {monthsMenu && (
            <ul className={s.subMenu}>
              {monthsList.map((month, index) => (
                <li
                  key={index}
                  className={s.subItem}
                  onClick={(e) => changeMonth(e, month)}
                >
                  {month.name}
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
              {yearsList.map((year, index) => (
                <li
                  key={index}
                  className={s.subItem}
                  onClick={(e) => changeYear(e, year.name)}
                >
                  {year.name}
                </li>
              ))}
              {selectedYear && !selectedMonth && (
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

      {statistics.length !== 0 ? (
        <ul className={s.tableBody}>
          {statistics.map((operation, index) => (
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
      ) : (
        <div className={s.messEmpty}>
          Трансакции за данный период отсутствуют
        </div>
      )}

      <div className={`${s.result} ${s.expenses}`}>
        Расходы:
        {statistics.length !== 0 ? (
          <span className={s.sum}>22 549.24</span>
        ) : (
          <span className={s.empty}>--</span>
        )}
      </div>
      <div className={`${s.result} ${s.income}`}>
        Доходы:
        {statistics.length !== 0 ? (
          <span className={s.sum}>27 350.00</span>
        ) : (
          <span className={s.empty}>--</span>
        )}
      </div>
    </div>
  )
}

export default Table
