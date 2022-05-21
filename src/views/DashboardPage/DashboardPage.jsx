import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import WithAuthRedirect from '../../hoc/withAuthRedirect'
import LoginPage from '../LoginPage'
import HomePage from '../HomePage'
import StatisticsPage from '../StatisticsPage'
import CurrencyPage from '../CurrencyPage'
import ButtonAddTransactions from '../../components/ButtonAddTransactions'
import Modal from '../../components/Modal'
import ModalLogout from '../../components/ModalLogout'
import ModalAddTransaction from '../../components/ModalAddTransaction'
import { globalSelectors, globalActions } from '../../redux/globall'
import { financeOperations } from '../../redux/finance'
import s from './DashboardPage.module.css'

const DashboardPage = () => {
  const isModalLogoutOpen = useSelector(globalSelectors.getModalLogoutOpen)
  const isModalAddTransactionOpen = useSelector(
    globalSelectors.getIsModalAddTransactionOpen,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(financeOperations.getAllTransactions())
    dispatch(financeOperations.getCategories())
  }, [dispatch])

  return (
    <div className={s.backgroundWrapper}>
      <div className={s.container}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/statistics">
            <StatisticsPage />
          </Route>

          <Route path="/currency">
            <CurrencyPage />
          </Route>

          <Route path="*">{WithAuthRedirect(<LoginPage />)}</Route>
        </Switch>

        <ButtonAddTransactions
          onClick={() => dispatch(globalActions.openModalAddTransaction())}
        />

        {isModalAddTransactionOpen && (
          <Modal>
            <ModalAddTransaction />
          </Modal>
        )}

        {isModalLogoutOpen && (
          <Modal>
            <ModalLogout />
          </Modal>
        )}
      </div>
    </div>
  )
}

export default DashboardPage
