import { useSelector } from 'react-redux'
import { getAllTransactions } from '../../../redux/finance/finance-selectors'
import { normalizeNum, normalizeFormatDate } from '../../../services'
import sprite from '../../../assets/svg/sprite.svg'

import s from './HomeTabDesktop.module.css'

const HomeTabDesktop = () => {
  const transactions = useSelector((state) => getAllTransactions(state))
  let filterTrans = [...transactions]
  filterTrans.sort((a, b) => (a.date > b.date ? -1 : 1))
  return (
    <div className={s.container}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={s.tr}>
            <th className={s.border__start}>Дата</th>
            <th>Тип</th>
            <th>Категория</th>
            <th>Комментарий</th>
            <th>Сумма</th>
            <th>Баланс</th>
            <th>
              <svg className={s.edit}>
                <use href={`${sprite}#icon-edit`}></use>
              </svg>
            </th>
            <th className={s.border__end}>
              <svg className={s.delete}>
                <use href={`${sprite}#icon-delete`}></use>
              </svg>
            </th>
          </tr>
        </thead>
        <tbody className={s.tbody}>
          {transactions.length === 0 && (
            <tr key={1} className={s.tr}>
              <td>Дата транзакции</td>
              <td>+</td>
              <td>Категория</td>
              <td>Комментарий</td>
              <td>0</td>
              <td>0</td>
            </tr>
          )}
          {transactions?.map((item) => {
            console.log(item)
            const text = item.income === false ? '-' : '+'
            const colorTxt = item.income === false ? s.lose : s.profit

            return (
              <tr key={item.id} className={s.tr}>
                <td>{normalizeFormatDate(item.date)}</td>
                <td>{text}</td>
                <td>{item.category}</td>
                <td>{item.comment}</td>
                <td className={colorTxt}>{normalizeNum(item.sum)}</td>
                <td>{normalizeNum(item.balance)}</td>
                <td>
                  <button className={s.editBtn}>
                  <svg className={s.edit}>
                    <use href={`${sprite}#icon-edit`} operationId={item.id} type={text} category={item.category} comment={item.comment} amount={item.sum} ></use>
                    </svg> 
                  </button>
                </td>
                <td>
                  <button className={s.deleteBtn}>
                  <svg className={s.delete}>
                    <use href={`${sprite}#icon-delete`} operationId={item.id} ></use>
                  </svg> 
                 </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default HomeTabDesktop
