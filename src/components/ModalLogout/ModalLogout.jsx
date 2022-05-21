import { useDispatch } from 'react-redux'
import { closeModalLogout } from '../../redux/globall/global-actions'
import { logOut } from '../../redux/session/session-operations'
import s from './ModalLogout.module.css'

export default function ModalLogout() {
  const dispatch = useDispatch()
  return (
    <div className={s.modal}>
      <p className={s.text}>Вы уверены?</p>
      <div className={s.buttonWrapper}>
        <button
          onClick={() => dispatch(logOut())}
          className={s.button}
          type="button"
        >
          Выйти
        </button>
        <button
          onClick={() => dispatch(closeModalLogout())}
          className={s.button}
          type="button"
        >
          Отмена
        </button>
      </div>
    </div>
  )
}
