import s from './Switch.module.css'

const Switch = ({ onChange, checked }) => {
  return (
    <label className={s.toggleSwitch}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={s.switch}></span>
    </label>
  )
}

export default Switch
