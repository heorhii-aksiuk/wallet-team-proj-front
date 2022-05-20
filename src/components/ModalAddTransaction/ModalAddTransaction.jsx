import React, { useEffect, useState } from 'react'
import Datetime from 'react-datetime'
import 'moment/locale/ru'
import { addTransaction } from '../../redux/finance/finance-operations'
import { getTotalBalance } from '../../redux/finance/finance-selectors'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/finance/finance-selectors'
import sprite from '../../assets/svg/sprite.svg'
import PluSvg from '../../assets/svg/Plus.svg'
import MinusSvg from '../../assets/svg/Minus.svg'
import { ReactSVG } from 'react-svg'
import styles from './AddTransaction.module.css'
import Select from 'react-select/base'
//this is realisation AddTransaction
//  const [showModal, setShowModal] = useState(false);
//   const [showAddTransaction, setAddTransaction] = useState(false);

//  const toggleModal = () => {
//     setShowModal(!showModal);
//   };
//
//   function toggleAddTransaction() {
//     setAddTransaction(!showAddTransaction);
//   }
//      <DashboardPage />
//       <ButtonAddTransaction
//         toggleAddTransaction={toggleAddTransaction}
//         toggleModal={toggleModal}
//       />
//
//       {showModal && (
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
  const [transactionType, setTransactionType] = useState('income')
  const [category, setCategory] = useState('Регулярный доход')
  const [listActive, setListActive] = useState(false)
  const [summ, setSumm] = useState('')
  const [date, setDate] = useState(new Date())
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()
  const currentBalance = useSelector(getTotalBalance)
  const categories = useSelector(getCategories)

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
  //schema for validate data
  const SCHEMA = {
    type: 'required|boolean',
    category: 'required|string',
    sum: 'required|number',
    comment: 'string',
    day: 'required|number',
    month: 'required|number',
    year: 'required|number',
  }

  async function SubmitHandler(e) {
    e.preventDefault()

    const nextBalance = currentBalance - summ

    if (
      nextBalance <= 0 &&
      transactionType === 'spending' &&
      category !== 'Выберите категорию'
    ) {
      //notify
      return
    }
    if (category === 'Выберите категорию') {
      //notify
      return
    }
    const userBalance = currentBalance.toString()
    const transaction = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      type: transactionType === 'income' ? true : false,
      category: category,
      sum: parseFloat(summ),
      comment: comment,
      balance:
        transactionType === 'income'
          ? userBalance + parseFloat(summ)
          : userBalance - parseFloat(summ),
    }
    const transactionNoComment = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      type: transactionType === 'income' ? true : false,
      category: category,
      sum: parseFloat(summ),
      balance:
        transactionType === 'income'
          ? userBalance + parseFloat(summ)
          : userBalance - parseFloat(summ),
    }
    // нормалізація даних на бекенд

    try {
      //валідація даних
      dispatch(addTransaction(comment ? transaction : transactionNoComment))
      closeComponent()
    } catch (error) {
      console.log(error[0].message)
    }
  }

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

  function summChange(e) {
    const number = Number(e.target.value)
    const integer = Number.isInteger(number)

    if (!integer) {
      const [int, float] = String(number).split('.')
      setSumm(`${int}.${float.slice(0, 2)}`)
      return
    }

    setSumm(e.target.value)
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
      const active = styles.transTypeTextActive
      return `${basic} ${active}`
    }

    return styles.transTypeText
  }

  function spendingActiveTrigger() {
    if (transactionType === 'spending') {
      const basic = styles.transTypeText
      const active = styles.transTypeTextActive
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
        <button onClick={closeComponent}>
          <svg width="24" height="24" className={styles.closeIcon}>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </button>
      </div>
      <h2 className={styles.title}>Добавить транзакцию</h2>
      <form id="transaction" className={styles.form} onSubmit={SubmitHandler}>
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
        <Select />

        <div className={styles.summFieldContainer}>
          <input
            className={styles.summField}
            required
            onChange={summChange}
            min="0.00"
            step="0.01"
            type="number"
            placeholder="0.00"
            value={summ}
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
          <svg width="24" height="24" className={styles.calendarIcon}>
            <use href={`${sprite}#icon-calendar`} />
          </svg>
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
