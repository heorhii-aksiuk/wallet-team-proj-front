import { useState } from 'react'

import Select from 'react-select'

import Modal from '../Modal/Modal'
import SwitchComponent from '../SwitchComponent'
import Button from '../Button/Button'

import sprite from '../../assets/svg/sprite.svg'
import s from './ModalAddTransaction.module.css'

const ModalAddTransaction = ({ onClose }) => {
  const [checkBox, setCheckBox] = useState(true)
  const [selectedOption, setSelectedOption] = useState({
    value: null,
    label: '',
  })
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = () => {
    setCheckBox(!checkBox)
  }
  const handleClick = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Modal>
        <div className={s.transactionContainer}>
          <h1 className={s.title}>Добавить транзакцию</h1>
          <SwitchComponent checked={checkBox} onChange={handleChange} />
          <form className={s.formTransactionContainer}>
            {!checkBox && (
              <div className={s.inputWrapperSelect}>
                <Select
                  name="selectedOption"
                  onChange={setSelectedOption}
                  placeholder="Выберите категорию"
                />
              </div>
            )}
            <div className={s.inputWrapper}>
              <div className={s.inputContainer}>
                <label>
                  <input
                    className={s.amountInput}
                    type="number"
                    placeholder="0.00"
                  />
                </label>
              </div>
              <div className={s.calendarContainer}>
                <label>
                  <input className={s.calendarInput} type="data" />
                  <button className={s.inputIcon} onClick={handleClick}>
                    <svg width="24" height="24">
                      <use href={`${sprite}#icon-calendar`} />
                    </svg>
                  </button>
                </label>
              </div>
            </div>
            <div className={s.commentContainer}>
              <label>
                <input
                  className={s.commentInput}
                  type="text"
                  placeholder="Комментарий"
                />
              </label>
            </div>
            <div className={s.transactionButton}>
              <Button type="primary" title={'Добавить'} />
            </div>
          </form>
          <div className={s.cancelButton}>
            <Button type="secondary" title={'Отмена'} onClick={onClose} />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ModalAddTransaction
