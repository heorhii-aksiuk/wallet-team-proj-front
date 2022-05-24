import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import moment from 'moment'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'

import Button from '../Button'
import { financeOperations, financeSelectors } from '../../redux/finance'
import { globalActions } from '../../redux/globall'
import { transactionSchema } from '../../utils'
import sprite from '../../assets/svg/sprite.svg'
import styles from './ModalUpdateTransaction.module.css'

function ModalUpdateTransaction({ selectedTransaction }) {
  const transactionType =
    selectedTransaction.income === true ? 'income' : 'spending'
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [categoriesMenu, setCategoriesMenu] = useState(false)
  const categories = useSelector(financeSelectors.getCategories)
  const initialValues = {
    sum: selectedTransaction.sum,
    comment: selectedTransaction.comment,
    date: moment(selectedTransaction.date),
  }
  const spendingCategories = Array.isArray(categories)
    ? categories.filter((item) => item.income === false)
    : null
  const incomeCategories = Array.isArray(categories)
    ? categories.filter((item) => item.income === true)
    : null

  console.log(selectedTransaction)

  const dispatch = useDispatch()

  const onSubmit = (values) => {
    let category = ''
    let balance =
      transactionType === 'spending'
        ? selectedTransaction.balance + selectedTransaction.sum
        : selectedTransaction.balance - selectedTransaction.sum

    if (!selectedCategory) {
      category = selectedTransaction.category
    } else {
      category = selectedCategory.name
    }

    if (transactionType === 'spending') {
      balance = balance - values.sum
    } else if (transactionType === 'income') {
      balance = balance + values.sum
    }

    const transaction = {
      ...values,
      date: moment(values.date).format('YYYY-MM-DD'),
      category,
      income: selectedTransaction.income,
      balance: balance.toString(),
    }

    console.log(transaction)

    dispatch(
      financeOperations.updateTransaction({
        id: selectedTransaction.id,
        transaction,
      }),
    )
  }

  const changeCategory = (e, category) => {
    e.stopPropagation()
    setSelectedCategory(category)
    setCategoriesMenu(false)
  }

  return (
    <div className={styles.addTransContainer}>
      {categoriesMenu && (
        <div
          className={styles.backdrop}
          onClick={() => {
            setCategoriesMenu(false)
          }}
        ></div>
      )}

      <div
        className={styles.closeBtnBox}
        onClick={() => dispatch(globalActions.closeModalUpdateTransaction())}
      >
        <button className={styles.closeButton}>
          <svg width="24" height="24" className={styles.closeIcon}>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </button>
      </div>

      <h2 className={styles.title}>Изменить транзакцию</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={transactionSchema}
        validateOnChange={false}
      >
        {({ setFieldValue, values }) => (
          <Form className={styles.form}>
            {transactionType === 'spending' && (
              <div
                className={styles.dropDownContainer}
                onClick={() => setCategoriesMenu(true)}
              >
                <div className={styles.dropDownField}>
                  {selectedCategory?.name ? (
                    <p className={styles.selectedCategory}>
                      {selectedCategory.name}
                    </p>
                  ) : (
                    <p>
                      {selectedTransaction?.category || 'Выберите категорию'}
                    </p>
                  )}
                </div>

                <svg className={styles.arowIcon}>
                  <use href={`${sprite}#icon-arrow`} x={10}></use>
                </svg>

                {categoriesMenu && spendingCategories && (
                  <ul className={styles.dropDownList}>
                    {spendingCategories.map((category, index) => (
                      <li
                        key={index}
                        className={styles.dropDownItemSpending}
                        onClick={(e) => changeCategory(e, category)}
                      >
                        {category.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {transactionType === 'income' && (
              <div
                className={styles.dropDownContainer}
                onClick={() => setCategoriesMenu(true)}
              >
                <div className={styles.dropDownField}>
                  {selectedCategory?.name ? (
                    <p className={styles.selectedCategory}>
                      {selectedCategory.name}
                    </p>
                  ) : (
                    <p>
                      {selectedTransaction?.category || 'Выберите категорию'}
                    </p>
                  )}
                </div>

                <svg className={styles.arowIcon}>
                  <use href={`${sprite}#icon-arrow`} x={10}></use>
                </svg>

                {categoriesMenu && incomeCategories && (
                  <ul className={styles.dropDownList}>
                    {incomeCategories.map((category, index) => (
                      <li
                        key={index}
                        className={styles.dropDownItemIncome}
                        onClick={(e) => changeCategory(e, category)}
                      >
                        {category.name}
                      </li>
                    ))}
                  </ul>
                )}
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
              <Field name="date">
                {() => (
                  <>
                    <Datetime
                      inputProps={{ className: styles.calendarField }}
                      value={values.date}
                      closeOnSelect={true}
                      timeFormat={false}
                      onChange={(date) => {
                        setFieldValue('date', date)
                      }}
                      dateFormat="DD.MM.YYYY"
                      isValidDate={(currenatDate) =>
                        currenatDate.isBefore(moment())
                      }
                      // input={false}
                    ></Datetime>

                    <svg width="24" height="24" className={styles.calendarIcon}>
                      <use href={`${sprite}#icon-calendar`} />
                    </svg>
                  </>
                )}
              </Field>
            </div>

            <div className={styles.commentFieldContainer}>
              <Field
                as="textarea"
                name="comment"
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
                onClick={() =>
                  dispatch(globalActions.closeModalUpdateTransaction())
                }
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ModalUpdateTransaction
