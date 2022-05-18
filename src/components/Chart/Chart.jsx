import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import s from './Chart.module.css'

const back = [
  { id: 1, color: '#FED057', name: 'Основные расходы', quantity: 8700.0 },
  { id: 2, color: '#FFD8D0', name: 'Продукты', quantity: 3800.74 },
  { id: 3, color: '#FD9498', name: 'Машина', quantity: 1500.0 },
  { id: 4, color: '#C5BAFF', name: 'Забота о себе', quantity: 800.0 },
  { id: 5, color: '#6E78E8', name: 'Забота о детях', quantity: 2208.5 },
  { id: 6, color: '#4A56E2', name: 'Товары для дома', quantity: 300.0 },
  { id: 7, color: '#81E1FF', name: 'Образование', quantity: 3400.0 },
  { id: 8, color: '#24CCA7', name: 'Досуг', quantity: 1230.0 },
  { id: 9, color: '#00AD84', name: 'Другие расходы', quantity: 610.0 },
]

function Chart() {
// { statistics,
//   totalBalance }
  ChartJS.register(ArcElement, Tooltip)
  const names = back.map((obj) => obj.name)
  const colors = back.map((obj) => obj.color)
  const quantities = back.map((obj) => obj.quantity)
  const doughnutData = {
    labels: names,
    datasets: [
      {
        label: '# of Votes',
        data: quantities,
        backgroundColor: colors,
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  }

  return (
    <div className={s.diagramContainer}>
      <div className={s.balance}>₴ 24 000.00</div>
      <Doughnut data={doughnutData} />
    </div>
  )
}

export default Chart
