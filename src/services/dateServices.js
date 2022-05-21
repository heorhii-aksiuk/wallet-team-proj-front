export const getPeriodStatistics = (month, year) => {
  const monthsList = [
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
  const yearsList = [{ name: '2020' }, { name: '2021' }, { name: '2022' }]

  const currentYear = new Date().getFullYear()

  let startMonth = '01'
  let startYear = '2020'

  let endMonth = '12'
  let endYear = `${currentYear}`

  if (month) {
    startMonth = month.id
    endMonth = month.id
  }

  if (year) {
    startYear = year
    endYear = year
  }

  const startDate = `${startYear}.${startMonth}.01`
  const endDate = `${endYear}.${endMonth}.31`

  return { monthsList, yearsList, startDate, endDate }
}

export const getCurrentDate = () => {
  const currentYear = new Date().getFullYear()
  const currentMonth = (new Date().getMonth() + 1).toString()
  const currentDay = new Date().getDate()

  return `${currentYear}-${
    currentMonth.length === 2 ? currentMonth : '0' + currentMonth
  }-${currentDay}`
}

export const normalizeFormatDate = (date) => {
  if (date.toString().length === 1) {
    return '0' + date.toString()
  }
  return date.toString()
}
