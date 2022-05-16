const getUser = (state) => state.session.user

const getToken = (state) => state.session.token

const getError = (state) => state.session.error

const getIsAuth = (state) => state.session.isAuth

export { getUser, getToken, getError, getIsAuth }
