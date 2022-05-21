import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Datetime from 'react-datetime'
import 'moment/locale/ru'
import { addTransaction } from '../../redux/finance/finance-operations'
import { getTotalBalance } from '../../redux/finance/finance-selectors'
import {getCategories} from "../../redux/finance/finance-selectors";
import sprite from '../../assets/svg/sprite.svg'
import PluSvg from '../../assets/svg/Plus.svg'
import MinusSvg from '../../assets/svg/Minus.svg'
import { ReactSVG } from 'react-svg'
import 'react-datetime/css/react-datetime.css'
import styles from './ModalAddTransaction.module.css'

function AddTransaction({ toggleModal, toggleAddTransaction }) {
    const [transactionType, setTransactionType] = useState('spending')
    const [category, setCategory] = useState('Регулярный доход')
    const [listActive, setListActive] = useState(false)
    const [summ, setSumm] = useState('')
    const [date, setDate] = useState(new Date())
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()
    const currentBalance = useSelector(getTotalBalance)
    const categories = useSelector(getCategories)
    const categoryOptions = categories.map(category => ({
        value: category.id,
        label: category.name
    }))

    const formik = useFormik({
        initialValues: {
            typeTransaction: false,
            sum: '',
            date: date,
            description: '',
            category: category,
        },
        validationSchema: Yup.object({
            typeTransaction: Yup.boolean().required(),
            sum: Yup.number().required(),
            date: Yup.string().required(),
            description: Yup.string(),
            category: Yup.string(),
        }),
        onSubmit: values => {
            values = { ...values, category: category, date: date, sum: +summ };
            dispatch(addTransaction(values));
            closeComponent()
        },
    });

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

    function closeComponent() {
        toggleAddTransaction()
        toggleModal()
    }

    const switchClickHandler = () => {
        setTransactionType(transactionType === 'spending' ? 'income' : 'spending')
    }

//this function add class
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
                <button className={styles.closeButton} onClick={closeComponent}>
                    <svg width="24" height="24" className={styles.closeIcon}>
                        <use href={`${sprite}#icon-close`} />
                    </svg>
                </button>
            </div>
            <h2 className={styles.title}>Добавить транзакцию</h2>
            <form id="transaction" className={styles.form} onSubmit={formik}>
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
                        value={summ}
                        onChange={(e) => setSumm(e.target.value)}
                    />
                </div>

                <div className={styles.calendarContainer}>
                    <Datetime
                        inputProps={{ className: styles.calendarField }}
                        initialValue={date}
                        closeOnSelect={true}
                        timeFormat={false}
                        onChange={(e) => setDate(e)}
                    />
                    <svg width="24" height="24" className={styles.calendarIcon}>
                        <use href={`${sprite}#icon-calendar`} />
                    </svg>
                </div>

                <div className={styles.commentFieldContainer}>
          <textarea
              className={styles.commentField}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="комментарий" />
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