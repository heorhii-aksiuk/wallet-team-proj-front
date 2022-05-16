import Switch from './Switch'

import s from './SwitchComponent.module.css'

const SwitchComponent = ({ onChange, checked }) => {
  return (
    <div className={s.block}>
      <span className={`${s.income} ${checked && s.checked}`}>Доход</span>
      <Switch onChange={onChange} checked={checked} />
      <span className={`${s.expenses} ${!checked && s.checked}`}>Расход</span>
    </div>
  )
}

export default SwitchComponent
