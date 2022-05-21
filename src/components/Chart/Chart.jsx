import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { normalizeNum } from '../../utils'

import s from './Chart.module.css'

function Chart({ statistics, totalBalance }) {
  ChartJS.register(ArcElement, Tooltip)
  const names = statistics.map((obj) => obj.category)
  const colors = statistics.map((obj) => obj.color)
  const quantities = statistics.map((obj) => obj.sum)

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

  return (
    <div className={s.diagramContainer}>
      <div className={s.balance}>
        ₴ {totalBalance ? normalizeNum(totalBalance) : 0}
      </div>
      <Doughnut data={doughnutData} />
    </div>
  )
}

export default Chart
