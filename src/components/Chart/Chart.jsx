import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import s from './Chart.module.css'

function Chart({ statistics, totalBalance }) {
  ChartJS.register(ArcElement, Tooltip)
  const names = statistics.map((obj) => obj.name)
  const colors = statistics.map((obj) => obj.color)
  const quantities = statistics.map((obj) => obj.quantity)

  let doughnutData = {
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

  if (statistics.length === 0) {
    doughnutData = {
      labels: ['--', '--'],
      datasets: [
        {
          label: '# of Votes',
          data: ['50', '50'],
          backgroundColor: ['#bdbdbd', '#e0e0e0'],
          borderWidth: 0,
          cutout: '70%',
        },
      ],
    }
  }

  const normalizeNum = (str) => {
    return str.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
  }

  return (
    <div className={s.diagramContainer}>
      <div className={s.balance}>₴ {normalizeNum(totalBalance)}</div>
      <Doughnut data={doughnutData} />
    </div>
  )
}

export default Chart
