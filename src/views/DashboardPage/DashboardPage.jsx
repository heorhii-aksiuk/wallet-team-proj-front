import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../HomePage'
import StatisticsPage from '../StatisticsPage'
import CurrencyPage from '../CurrencyPage'
import Modal from '../../components/Modal'
import ModalLogout from '../../components/ModalLogout'
import ModalAddTransaction from '../../components/ModalAddTransaction'
import { globalSelectors } from '../../redux/globall'
import s from './DashboardPage.module.css'

const DashboardPage = () => {
  const isModalAddTransactionOpen = useSelector(
    globalSelectors.getIsModalAddTransactionOpen,
  )

  const isModalLogoutOpen = useSelector(globalSelectors.getModalLogoutOpen)

  return (
    <div className={s.backgroundWrapper}>
      <div className={s.container}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/currency">
            <CurrencyPage />
          </Route>

          <Route path="/statistics">
            <StatisticsPage />
          </Route>

          <Route path="*">
            <HomePage />
          </Route>
        </Switch>

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
