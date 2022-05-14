import s from './ButtonAddTransactions.module.css'

import Plus from '../../assets/svg/Plus.svg'

const ButtonAddTransactions = ({ onChange }) => {
  return (
    <button className={`${s.button} ${s.position}`} onClick={onChange}>
      <img className={s.icon} src={Plus} alt="Add transaction" />
    </button>
  )
}
export default ButtonAddTransactions
