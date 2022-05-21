import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Chart from '../Chart'
import Table from '../Table'
import { financeOperations, financeSelectors } from '../../redux/finance'
import s from './DiagramTab.module.css'

function DiagramTab() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const dispatch = useDispatch()

  const statistics = useSelector(financeSelectors.getStatistics)
  const totalBalance = useSelector(financeSelectors.getTotalBalance)

  useEffect(() => {
    // dispatch(financeOperations.getStatistics({ startDate, endDate }))
  }, [startDate, endDate, dispatch])

  return (
    <div className={s.container}>
      <div className={s.box}>
        <h2 className={s.title}>Статистика</h2>
        <Chart statistics={statistics.data} totalBalance={totalBalance} />
      </div>
      <Table
        statistics={statistics.data}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    </div>
  )
}

export default DiagramTab
