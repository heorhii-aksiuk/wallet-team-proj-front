export const monthsList = [
  { id: '01', name: 'Январь', lastDay: '31' },
  { id: '02', name: 'Февраль', lastDay: '28' },
  { id: '03', name: 'Март', lastDay: '31' },
  { id: '04', name: 'Апрель', lastDay: '30' },
  { id: '05', name: 'Май', lastDay: '31' },
  { id: '06', name: 'Июнь', lastDay: '30' },
  { id: '07', name: 'Июль', lastDay: '31' },
  { id: '08', name: 'Август', lastDay: '31' },
  { id: '09', name: 'Сентябрь', lastDay: '30' },
  { id: '10', name: 'Октябрь', lastDay: '31' },
  { id: '11', name: 'Ноябрь', lastDay: '30' },
  { id: '12', name: 'Декабрь', lastDay: '31' },
]

export const yearsList = [{ name: '2020' }, { name: '2021' }, { name: '2022' }]

export const getPeriodStatistics = (selectedMonth, selectedYear) => {
  const currentYear = new Date().getFullYear()

  let startMonth = '01'
  let startYear = '2020'

  let endDay = '31'
  let endMonth = '12'
  let endYear = `${currentYear}`

  if (selectedMonth) {
    startMonth = selectedMonth.id
    endDay = selectedMonth.lastDay
    endMonth = selectedMonth.id
  }

  if (selectedYear) {
    startYear = selectedYear
    endYear = selectedYear
  }

  const startDate = `${startYear}-${startMonth}-01`
  const endDate = `${endYear}-${endMonth}-${endDay}`

  return { startDate, endDate }
}
