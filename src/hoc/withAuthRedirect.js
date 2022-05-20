import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { sessionSelectors } from '../redux/session'

const WithAuthRedirect = (Component) => {
  const isAuth = useSelector(sessionSelectors.getIsAuth)

  const history = useHistory()

  if (isAuth) {
    return history.push('/')
  }

  return Component
}

export default WithAuthRedirect
