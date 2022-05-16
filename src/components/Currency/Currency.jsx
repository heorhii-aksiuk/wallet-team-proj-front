import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getListCurrency, Status } from '../../services'
import s from './Currency.module.css'

const Currency = () => {
  const [dataCurrency, setDataCurrency] = useState([])
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(Status.IDLE)
  useEffect(() => {
    setStatus(Status.PENDING)
    getListCurrency()
      .then((results) => {
        setDataCurrency(results)
        setStatus(Status.RESOLVED)
      })
      .catch((error) => {
        console.log(error)
        setError('Что-то пошло не так. Зайдите позже.')
        setStatus(Status.REJECTED)
      })
  }, [])

  return (
    <div className={s.card}>
      <table className={s.table}>
        <tbody>
          <tr className={s.header}>
            <th className={s.th}>Валюта</th>
            <th className={s.th}>Покупка</th>
            <th className={s.th}>Продажа</th>
          </tr>
        </tbody>
        {dataCurrency &&
          dataCurrency.map((el, i) => {
            console.log(el.buy)
            return (
              <tbody key={i}>
                <tr>
                  <td>{el.ccy}</td>
                  <td>{parseFloat(el.buy).toFixed(2)}</td>
                  <td>{parseFloat(el.sale).toFixed(2)}</td>
                </tr>
              </tbody>
            )
          })}
      </table>
    </div>
  )
}
export default Currency
