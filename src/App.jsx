import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Link } from 'react-router-dom'

import { sessionOperations } from './redux/session'
import CommonContainer from './containers/CommonContainer'
import Loader from './components/Loader'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(sessionOperations.refreshCurrentUser())
  }, [dispatch])
  return (
    <>
      <Route exact path="/">
        <div>
          <h2 style={{ marginBottom: '50px' }}>Home Page</h2>

          <ul>
            <li>
              <Link to="/">home-page</Link>
            </li>
            <li>
              <Link to="/login">login-page</Link>
            </li>
            <li>
              <Link to="/registration">registration-page</Link>
            </li>
          </ul>
        </div>
      </Route>

      <Route path="/login">
        <div>
          <h2 style={{ marginBottom: '50px' }}>Login Page</h2>

          <ul>
            <li>
              <Link to="/">home-page</Link>
            </li>
            <li>
              <Link to="/login">login-page</Link>
            </li>
            <li>
              <Link to="/registration">registration-page</Link>
            </li>
          </ul>
        </div>
      </Route>

      <Route path="/registration">
        <div>
          <h2 style={{ marginBottom: '50px' }}>Registration Page</h2>

          <ul>
            <li>
              <Link to="/">home-page</Link>
            </li>
            <li>
              <Link to="/login">login-page</Link>
            </li>
            <li>
              <Link to="/registration">registration-page</Link>
            </li>
          </ul>
        </div>
      </Route>
    </>
  )
}

export default App
