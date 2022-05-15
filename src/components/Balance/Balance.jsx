import PropTypes from 'prop-types'
import s from './Balance.module.css'

const Balance = ({ balance = '24 000.00' }) => (
  <div className={s.card}>
    <p className={s.title}>Ваш баланс</p>
    <h3 className={s.content}>₴ {balance}</h3>
  </div>
)

Balance.propTypes = {
  balance: PropTypes.string,
}

export default Balance
