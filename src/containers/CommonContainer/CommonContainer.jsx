import s from './CommonContainer.module.css'

const CommonContainer = ({ children }) => (
  <div className={s.container}>{children}</div>
)

export default CommonContainer
