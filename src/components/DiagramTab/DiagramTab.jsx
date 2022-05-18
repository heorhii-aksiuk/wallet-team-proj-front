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
  // статистика и баланс
  // const statistics = useSelector()
  // const totalBalance = useSelector()

  // const changeStartDate = (date) => {
  //   setStartDate(date)
  // }

  const changeEndDate = (date) => {
    setEndDate(date)
  }

  useEffect(() => {
    // запросить статистику
    // dispatch()
  }, [startDate, endDate])

  return (
    <div className={s.container}>
      <div className={s.box}>
        <h2 className={s.title}>Статистика</h2>
        <Chart
        //  statistics={statistics}
        //  totalBalance={totalBalance}
        />
      </div>
      <Table
        //  statistics={statistics}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    </div>
  )
}

export default DiagramTab
