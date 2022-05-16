const getUser = (state) => state.session.user

const getToken = (state) => state.session.token

const getSessionError = (state) => state.session.error

const getIsAuth = (state) => state.session.isAuth

const getIsFetchingUser = (state) => state.session.isFetchingUser

export { getUser, getToken, getSessionError, getIsAuth, getIsFetchingUser }
