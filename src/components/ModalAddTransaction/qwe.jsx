import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Datetime from 'react-datetime'
import 'moment/locale/ru'
import Button from '../Button'
import { addTransaction } from '../../redux/finance/finance-operations'
import { getTotalBalance } from '../../redux/finance/finance-selectors'
import { getCategories } from '../../redux/finance/finance-selectors'
import { getCurrentDate, normalizeFormatDate } from '../../services'
import sprite from '../../assets/svg/sprite.svg'
import PluSvg from '../../assets/svg/Plus.svg'
import MinusSvg from '../../assets/svg/Minus.svg'
import { ReactSVG } from 'react-svg'
import 'react-datetime/css/react-datetime.css'
import styles from './ModalAddTransaction.module.css'

function ModalAddTransaction() {
  const [transactionType, setTransactionType] = useState('spending')
  const [selectedDate, setSelectedDate] = useState(null)

  const initialValues = {
    sum: '',
    description: '',
  }

  const [categoriesMenu, setCategoriesMenu] = useState(false)
  const [category, setCategory] = useState('Регулярный доход')

  const onSubmit = (values) => {
    const date = selectedDate
      ? `${selectedDate.getFullYear()}-${normalizeFormatDate(
          selectedDate.getMonth() + 1,
        )}-${normalizeFormatDate(selectedDate.getDate())}`
      : getCurrentDate()

    const transaction = { ...values, date }

    console.log(transaction)
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

  const switchClickHandler = () => {
    setTransactionType(transactionType === 'spending' ? 'income' : 'spending')
  }

  return (
    <div className={styles.addTransContainer}>
      <div className={styles.closeBtnBox}>
        <button className={styles.closeButton}>
          <svg width="24" height="24" className={styles.closeIcon}>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </button>
      </div>

      <h2 className={styles.title}>Добавить транзакцию</h2>

      <Formik
        initialValues={initialValues}
        // validationSchema={loginSchema}
        onSubmit={onSubmit}
        validateOnChange={false}
      >
        <Form className={styles.form}>
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

          {transactionType === 'spending' && (
            <div
              className={styles.dropDownContainer}
              onClick={() => setCategoriesMenu(true)}
            >
              <div className={styles.dropDownField}>Выберите категорию</div>

              <svg className={styles.arowIcon}>
                <use href={`${sprite}#icon-arrow`} x={10}></use>
              </svg>

              <ul className={styles.dropDownList}></ul>
            </div>
          )}

          <div className={styles.summFieldContainer}>
            <Field
              className={styles.summField}
              required
              min="0.00"
              step="0.01"
              type="number"
              name="sum"
              placeholder="0.00"
            />
          </div>

          <div className={styles.calendarContainer}>
            <Datetime
              inputProps={{ className: styles.calendarField }}
              initialValue={getCurrentDate()}
              closeOnSelect={true}
              timeFormat={false}
              onChange={(e) => setSelectedDate(new Date(e))}
              dateFormat="YYYY-MM-DD"
            />
            <svg width="24" height="24" className={styles.calendarIcon}>
              <use href={`${sprite}#icon-calendar`} />
            </svg>
          </div>

          <div className={styles.commentFieldContainer}>
            <Field
              as="textarea"
              name="description"
              className={styles.commentField}
              placeholder="Комментарий"
            />
          </div>

          <div className={styles.buttonsContainer}>
            <Button
              className={styles.submitButton}
              title="Добавить"
              type="submit"
            />

            <Button
              className={styles.cancelButton}
              title="Отмена"
              type="button"
              typeButton="secondary"
            />
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default ModalAddTransaction
