import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { sessionSelectors } from '../../redux/session'
import { globalSelectors } from '../../redux/globall'

const PrivateRoute = (Component) => {
  const isAuth = useSelector(sessionSelectors.getIsAuth)
  const isLoading = useSelector(globalSelectors.getIsLoading)

  if (!isAuth && !isLoading) {
    return <Redirect to="/login" />
  }

  return Component
}

export default PrivateRoute
