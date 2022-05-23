import { useState, useEffect } from 'react'
import { getListCurrency } from '../../services'
import { Status } from '../../utils'
import Loader from '../Loader'
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
        setError('Что-то пошло не так. Проверьте позднее.')
        setStatus(Status.REJECTED)
      })
  }, [])

  return (
    <div className={s.card}>
      <ul className={s.header}>
        <li>Валюта</li>
        <li>Покупка</li>
        <li>Продажа</li>
      </ul>
      <div
        className={`${s.body} ${
          status.includes(Status.REJECTED) ? s.flex : ''
        }`}
      >
        {status.includes(Status.PENDING) && <Loader />}
        {status.includes(Status.RESOLVED) &&
          dataCurrency &&
          dataCurrency.map((el, i) => (
            <ul key={i} className={s.bodyList}>
              <li>{el.ccy}</li>
              <li>{parseFloat(el.buy).toFixed(2)}</li>
              <li>{parseFloat(el.sale).toFixed(2)}</li>
            </ul>
          ))}
        {status.includes(Status.REJECTED) && (
          <div className={s.error}>{error}</div>
        )}
      </div>
    </div>
  )
}
export default Currency
