import { useSelector } from 'react-redux'
import { financeSelectors } from '../../redux/finance'
import { normalizeNum } from '../../services'

import s from './Balance.module.css'

const Balance = () => {
  const totalBalance = useSelector(financeSelectors.getTotalBalance)

  return (
    <div className={s.card}>
      <p className={s.title}>Ваш баланс</p>
      <h3 className={s.content}>
        ₴ {totalBalance ? normalizeNum(totalBalance) : 0}
      </h3>
    </div>
  )
}

export default Balance
