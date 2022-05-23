import { useSelector } from 'react-redux'
import { getAllTransactions } from '../../../redux/finance/finance-selectors'
import { normalizeNum, normalizeFormatDate } from '../../../services'
import s from './HomeTabMobile.module.css'

const HomeTabeMobile = () => {
  const transactions = useSelector((state) => getAllTransactions(state))
  return (
    <div className={s.container}>
      {transactions.length === 0 && (
        <table className={s.item}>
          <tbody>
            <tr>
              <th>У Вас еще нет транзакций</th>
            </tr>
          </tbody>
        </table>
      )}
      {transactions?.map((item) => {
        const border = item.income === false ? '#ff6596' : '#24cca7'
        const text = item.income === false ? '-' : '+'
        const colorTxt = item.income === false ? s.lose : s.profit
        return (
          <table
            key={item.id}
            className={s.item}
            style={{ borderColor: border }}
          >
            <tbody>
              <tr>
                <th>Дата</th>
                <td>{normalizeFormatDate(item.date)}</td>
              </tr>
              <tr>
                <th>Тип</th>
                <td>{text}</td>
              </tr>
              <tr>
                <th>Категория</th>
                <td>{item.category}</td>
              </tr>
              <tr>
                <th>Комментарий</th>
                <td>{item.comment}</td>
              </tr>
              <tr>
                <th>Сумма</th>
                <td className={colorTxt}>{normalizeNum(item.sum)}</td>
              </tr>
              <tr>
                <th>Баланс</th>
                <td>{normalizeNum(item.balance)}</td>
              </tr>
            </tbody>
          </table>
        )
      })}
    </div>
  )
}

export default HomeTabeMobile
