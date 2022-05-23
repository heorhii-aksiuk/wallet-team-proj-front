import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { sessionSelectors } from '../redux/session'
import { globalSelectors } from '../redux/globall'

const WithAuthRedirect = (Component) => {
  const isAuth = useSelector(sessionSelectors.getIsAuth)
  const isLoading = useSelector(globalSelectors.getIsLoading)

  if (isAuth && !isLoading) {
    return <Redirect to="/" />
  }

  return Component
}

export default WithAuthRedirect
