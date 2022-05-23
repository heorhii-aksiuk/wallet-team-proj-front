import s from './CommonContainer.module.css'

const CommonContainer = ({ children }) => (
  <div className={s.background}>
    <div className={s.container}>{children}</div>
  </div>
)

export default CommonContainer
