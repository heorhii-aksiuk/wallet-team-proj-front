import Chart from '../Chart'
import Table from '../Table'
import s from './DiagramTab.module.css'

function DiagramTab() {
  return (
    <div className={s.container}>
      <div className={s.box}>
        <h2 className={s.title}>Статистика</h2>
        <Chart />
      </div>
      <Table />
    </div>
  )
}

export default DiagramTab
