import PropTypes from 'prop-types'
import s from './Currency.module.css'

const Currency = () => {
  return (
    <div className={s.card}>
      <table className={s.table}>
        <tr className={s.header}>
          <th className={s.th}>Валюта</th>
          <th className={s.th}>Покупка</th>
          <th className={s.th}>Продажа</th>
        </tr>
        <tr>
          <td>USD</td>
          <td>27.55</td>
          <td>27.55</td>
        </tr>
        <tr>
          <td>EUR</td>
          <td>30.00</td>
          <td>30.00</td>
        </tr>
        <tr>
          <td>RUB</td>
          <td>00.00</td>
          <td>00.00</td>
        </tr>
      </table>
    </div>
  )
}
export default Currency
