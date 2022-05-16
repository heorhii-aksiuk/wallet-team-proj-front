import { createSlice } from '@reduxjs/toolkit'
import * as sessionOperations from './session-operations'

const initialState = {
  user: { name: 'Anatolii', email: null },
  token: null,
  error: null,
  isAuth: true,
  isFetchingUser: false,
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: {
    [sessionOperations.signUp.pending](state, action) {
      state.isFetchingUser = true
    },
    [sessionOperations.signUp.fulfilled](state, { payload }) {
      state.user = payload.user
      state.token = payload.token
      state.error = null
      state.isAuth = true
      state.isFetchingUser = false
    },
    [sessionOperations.signUp.rejected](state, { payload }) {
      state.error = payload.error
      state.isFetchingUser = false
    },
    [sessionOperations.logIn.pending](state, action) {
      state.isFetchingUser = true
    },
    [sessionOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user
      state.token = payload.token
      state.error = null
      state.isAuth = true
      state.isFetchingUser = false
    },
    [sessionOperations.logIn.rejected](state, { payload }) {
      state.error = payload.error
      state.isFetchingUser = false
    },
    [sessionOperations.refreshCurrentUser.pending](state, action) {
      state.isFetchingUser = true
    },
    [sessionOperations.refreshCurrentUser.fulfilled](state, { payload }) {
      state.user = payload.user
      state.token = payload.token
      state.error = null
      state.isAuth = true
      state.isFetchingUser = false
    },
    [sessionOperations.refreshCurrentUser.rejected](state, { payload }) {
      state.error = payload.error
      state.isFetchingUser = false
    },
    [sessionOperations.logOut.pending](state, action) {
      state.isFetchingUser = true
    },
    [sessionOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null }
      state.token = null
      state.error = null
      state.isAuth = false
      state.isFetchingUser = false
    },
    [sessionOperations.logOut.rejected](state, { payload }) {
      state.error = payload.error
      state.isFetchingUser = false
    },
  },
})

export default sessionSlice.reducer
