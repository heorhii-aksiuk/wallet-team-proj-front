import PropTypes from 'prop-types'
import s from './Button.module.css'

const Button = ({ title = 'title', type = 'primary', onClick }) => (
  <div
    className={
      type.includes('primary') ? s.button__primary : s.button__secondary
    }
    onClick={onClick}
  >
    {title}
  </div>
)

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'secondary']),
}

export default Button
