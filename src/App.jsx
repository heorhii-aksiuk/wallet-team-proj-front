import React, { useEffect, lazy, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import { sessionOperations } from './redux/session'
import { globalSelectors } from './redux/globall'
import CommonContainer from './containers/CommonContainer'
import WithAuthRedirect from './hoc/withAuthRedirect'
import PrivateRoute from './routes/PrivateRoute'
// import DashboardPage from './views/DashboardPage'
// import LoginPage from './views/LoginPage'
// import RegistrationPage from './views/RegistrationPage'
import Loader from './components/Loader'

const DashboardPage = lazy(() => import('./views/DashboardPage'))
const LoginPage = lazy(() => import('./views/LoginPage'))
const RegistrationPage = lazy(() => import('./views/RegistrationPage'))

function App() {
  const isLoading = useSelector(globalSelectors.getIsLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(sessionOperations.refreshCurrentUser())
  }, [dispatch])

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/*">
            <CommonContainer>{PrivateRoute(<DashboardPage />)}</CommonContainer>
          </Route>

          <Route path="/login">
            <CommonContainer>{WithAuthRedirect(<LoginPage />)}</CommonContainer>
          </Route>

          <Route path="/registration">
            <CommonContainer>
              {WithAuthRedirect(<RegistrationPage />)}
            </CommonContainer>
          </Route>
        </Switch>
      </Suspense>

      {isLoading && <Loader />}

      <Toaster />
    </>
  )
}

export default App
