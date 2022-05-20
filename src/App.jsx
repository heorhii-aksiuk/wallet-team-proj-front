import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import { sessionOperations } from './redux/session'
import { globalSelectors } from './redux/globall'
import CommonContainer from './containers/CommonContainer'
import WithAuthRedirect from './hoc/withAuthRedirect'
import DashboardPage from './views/DashboardPage'
import LoginPage from './views/LoginPage'
import RegistrationPage from './views/RegistrationPage'
import Loader from './components/Loader'

function App() {
  const dispatch = useDispatch()

  const isLoading = useSelector(globalSelectors.getIsLoading)

  useEffect(() => {
    dispatch(sessionOperations.refreshCurrentUser())
  }, [dispatch])

  return (
    <>
      <Switch>
        <Route exact path="/login">
          <CommonContainer>
            <LoginPage />
          </CommonContainer>
        </Route>

        <Route exact path="/registration">
          <CommonContainer>
            <RegistrationPage />
          </CommonContainer>
        </Route>

        <Route exact path="/*">
          <CommonContainer>
            <DashboardPage />
          </CommonContainer>
        </Route>
      </Switch>

      {isLoading && <Loader />}

      <Toaster />
    </>
  )
}

export default App
