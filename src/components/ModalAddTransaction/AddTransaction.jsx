import React, { useEffect, useState } from 'react'
import Datetime from 'react-datetime'
import 'moment/locale/ru'
import { addTransaction } from '../../redux/transactions'
//import balance
import { useDispatch, useSelector } from 'react-redux'
import sprite from '../../assets/svg/sprite.svg'
import PluSvg from '../../assets/svg/Plus.svg'
import MinusSvg from '../../assets/svg/Minus.svg'
import { ReactSVG } from 'react-svg'
import 'react-datetime/css/react-datetime.css'
import styles from './AddTransaction.module.css'
//там має реалізовуватися ModalAddTransaction
//  const toggleModal = () => {
//     setShowModal(!showModal);
//   };
//
//   function toggleAddTransaction() {
//     setAddTransaction(!showAddTransaction);
//   }

//      {showModal && (
//         <Modal>
//           {showAddTransaction && (
//             <AddTransaction
//               toggleAddTransaction={toggleAddTransaction}
//               toggleModal={toggleModal}
//             />
//           )}
//         </Modal>
//       )}

function AddTransaction({ toggleModal, toggleAddTransaction }) {
  const [transactionType, setTransactionType] = useState('spending')
  const [category, setCategory] = useState('Регулярный доход')
  const [listActive, setListActive] = useState(false)
  const [summ, setSumm] = useState('')
  const [date, setDate] = useState(new Date())
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    const backdrop = document.querySelector('#backdrop')

    function clickListener(e) {
      if (e.target === backdrop) {
        toggleAddTransaction()
        toggleModal()
      }

      if (e.target !== backdrop && listActive) {
        setListActive(!listActive)
      }
    }

    function keyListener(e) {
      if (e.code === 'Escape') {
        toggleAddTransaction()
        toggleModal()
      }
    }

    document.addEventListener('click', clickListener)
    document.addEventListener('keydown', keyListener)

    return function cleanup() {
      document.removeEventListener('click', clickListener)
      document.removeEventListener('keydown', keyListener)
    }
  }, [toggleAddTransaction, toggleModal, listActive])

  useEffect(() => {
    const dropDownList = document.querySelector('.' + styles.dropDownList)
    if (dropDownList) {
      dropDownList.style.cssText = 'height:' + dropDownList.scrollHeight + 'px'
    }
  }, [listActive])
  //

  function switchClickHandler(e) {
    if (!e.target.checked) {
      setTransactionType('spending')
      setCategory('Выберите категорию')
      return
    }
    setTransactionType('income')
    setCategory('Регулярный доход')
  }

  function categoryClickHandler(e) {
    setCategory(e.target.textContent)
    setListActive(!listActive)
  }

  function dateChange(e) {
    setDate(e._d)
  }

  function listOpen() {
    setListActive(!listActive)
  }

  function commentChange(e) {
    const field = document.querySelector(`.${styles.commentField}`)
    field.style.cssText = 'height:' + field.scrollHeight + 'px'
    setComment(e.target.value)
  }

  function closeComponent() {
    toggleAddTransaction()
    toggleModal()
  }

  // задача данных функций, повесить дополнительный класс по условию.
  function DropMenuActiveTrigger() {
    if (category !== 'Выберите категорию') {
      const basic = styles.dropDownField
      const active = styles.dropDownFieldActive

      return `${basic} ${active}`
    }

    return styles.dropDownField
  }

  function incomeActiveTrigger() {
    if (transactionType === 'income') {
      const basic = styles.transTypeText
      const active = styles.transTypeTextActiveIncome
      return `${basic} ${active}`
    }

    return styles.transTypeText
  }

  function spendingActiveTrigger() {
    if (transactionType === 'spending') {
      const basic = styles.transTypeText
      const active = styles.transTypeTextActiveSpending
      return `${basic} ${active}`
    }

    return styles.transTypeText
  }

  function switchToggle() {
    if (transactionType === 'income') {
      return styles.switchToggleIncome
    }

    return styles.switchToggleSpending
  }

  return (
    <div className={styles.addTransContainer}>
      <div onClick={closeComponent} className={styles.closeBtnBox}>
        <svg className={styles.closeIcon}>
          <use href={sprite + '#icon-close'} />
        </svg>
        {/* <ReactSVG
          className={styles.closeIcon}
          src={
            <svg width="24" height="24">
              <use href={`${sprite}#icon-close`} />
            </svg>
          }
        /> */}
      </div>
      <h2 className={styles.title}>Добавить транзакцию</h2>
      <form id="transaction" className={styles.form}>
        <div className={styles.transTypeContainer}>
          <span className={incomeActiveTrigger()}>Доход</span>
          <div className={styles.switchToggleContainer}>
            <label
              className={styles.switchToggleBody}
              htmlFor="transType"
            ></label>
            <span className={switchToggle()}>
              <ReactSVG
                className={styles.switchToggleSvg}
                src={transactionType === 'income' ? PluSvg : MinusSvg}
              />
            </span>
          </div>
          <input
            className={styles.switchToggleInput}
            onChange={switchClickHandler}
            name="transactionType"
            type="checkbox"
            id="transType"
            defaultChecked
          />
          <span className={spendingActiveTrigger()}>Расход</span>
        </div>

        <div className={styles.summFieldContainer}>
          <input
            className={styles.summField}
            required
            min="0.00"
            step="0.01"
            type="number"
            placeholder="0.00"
          />
        </div>

        <div className={styles.calendarContainer}>
          <Datetime
            onChange={dateChange}
            inputProps={{ className: styles.calendarField }}
            initialValue={date}
            closeOnSelect={true}
            timeFormat={false}
          />
          <svg className={styles.calendarIcon}>
            <use href={sprite + '#icon-calendar'} />
          </svg>
          {/* <ReactSVG
            className={styles.calendarIcon}
            src={
              <svg width="24" height="24">
                <use href={`${sprite}#icon-calendar`} />
              </svg>
            }
          /> */}
        </div>

        <div className={styles.commentFieldContainer}>
          <textarea
            onChange={commentChange}
            className={styles.commentField}
            value={comment}
            placeholder="комментарий"
          />
        </div>
      </form>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.submitButton}
          form="transaction"
          type="submit"
        >
          Добавить
        </button>
        <button onClick={closeComponent} className={styles.cancelButton}>
          Отмена
        </button>
      </div>
    </div>
  )
}

export default AddTransaction
