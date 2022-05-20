import React from 'react'
import Media from 'react-media'
import { useHistory, Route, Switch } from 'react-router-dom'

import { mediaQueries } from '../../utils/constants'

import HomePage from '../HomePage'
import StatisticsPage from '../StatisticsPage'
import CurrencyPage from '../CurrencyPage'
import Navigation from '../../components/Navigation'
import s from './DashboardPage.module.css'

const DashboardPage = () => {
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
      </div>
    </div>
  )
}

export default DashboardPage
