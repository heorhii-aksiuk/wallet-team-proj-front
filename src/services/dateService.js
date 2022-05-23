import moment from 'moment'

import { normalizeNumDate } from './normalizeService'

export const monthsList = [
  { id: '01', name: 'Январь' },
  { id: '02', name: 'Февраль' },
  { id: '03', name: 'Март' },
  { id: '04', name: 'Апрель' },
  { id: '05', name: 'Май' },
  { id: '06', name: 'Июнь' },
  { id: '07', name: 'Июль' },
  { id: '08', name: 'Август' },
  { id: '09', name: 'Сентябрь' },
  { id: '10', name: 'Октябрь' },
  { id: '11', name: 'Ноябрь' },
  { id: '12', name: 'Декабрь' },
]

export const yearsList = [{ name: '2020' }, { name: '2021' }, { name: '2022' }]

export const getPeriodStatistics = (selectedMonth, selectedYear) => {
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 1
  const currentDay = new Date().getDate()

  let startMonth = '01'
  let startYear = '2000'

  let endDay = normalizeNumDate(currentDay)
  let endMonth = normalizeNumDate(currentMonth)
  let endYear = currentYear

  if (selectedMonth) {
    startMonth = selectedMonth.id
    endMonth = selectedMonth.id
    endDay = moment(`${selectedYear}-${selectedMonth.id}`)
      .endOf('month')
      .format('DD')
  }

  if (selectedYear) {
    startYear = selectedYear
    endYear = selectedYear
  }

  if (selectedYear && !selectedMonth) {
    endMonth = '12'
    endDay = '31'
  }

  return {
    startDate: moment(`${startYear}-${startMonth}`).format('YYYY-MM-DD'),
    endDate: moment(`${endYear}-${endMonth}-${endDay}`).format('YYYY-MM-DD'),
  }
}

export const getCurrentDate = () => {
  const currentDay = new Date().getDate()
  const currentMonth = (new Date().getMonth() + 1).toString()
  const currentYear = new Date().getFullYear()

  return `${normalizeNumDate(currentDay)}.${normalizeNumDate(
    currentMonth,
  )}.${currentYear}`
}
