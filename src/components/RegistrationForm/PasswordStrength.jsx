import React from 'react'
import zxcvbn from 'zxcvbn'

import s from './PasswordStrength.module.css'

const PasswordStrength = ({ password }) => {
  const testResult = zxcvbn(password)
  const num = (testResult.score * 100) / 4

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return '#E0E0E0'
      case 1:
        return 'red'
      case 2:
        return 'orange'
      case 3:
        return '#24CCA7'
      case 4:
        return '#24CCA7'
      default:
        return 'none'
    }
  }

  const createPasswordLabel = () => {
    switch (testResult.score) {
      case 0:
        return 'Используйте сложный пароль'
      case 1:
        return 'Легкий пароль'
      case 2:
        return 'Нормальный пароль'
      case 3:
        return 'Хороший пароль'
      case 4:
        return 'Безопасный пароль!'
      default:
        return ''
    }
  }
  const changePasswordColor = () => ({
    width: `${num}%`,
    background: funcProgressColor(),
    height: '7px',
  })
  return (
    <div className={s.progressBar}>
      <div className="progress" style={{ height: '7px' }}>
        <div className="progress-bar" style={changePasswordColor()}></div>
      </div>
      <p className={s.Text} style={{ color: funcProgressColor() }}>
        {createPasswordLabel()}
      </p>
    </div>
  )
}

export default PasswordStrength
