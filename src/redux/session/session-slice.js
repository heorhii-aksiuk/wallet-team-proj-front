import { createSlice } from '@reduxjs/toolkit'
import * as sessionOperations from './session-operations'

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isAuth: true,
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: {
    [sessionOperations.signUp.fulfilled](state, { payload }) {
      state.user = payload.user
      state.token = payload.token
      state.error = null
      state.isAuth = true
    },
    [sessionOperations.signUp.rejected](state, { payload }) {
      state.error = payload.error
    },
    [sessionOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user
      state.token = payload.token
      state.error = null
      state.isAuth = true
    },
    [sessionOperations.logIn.rejected](state, { payload }) {
      state.error = payload.error
    },
    [sessionOperations.refreshCurrentUser.fulfilled](state, { payload }) {
      state.user = payload.user
      state.token = payload.token
      state.error = null
      state.isAuth = true
    },
    [sessionOperations.refreshCurrentUser.rejected](state, { payload }) {
      state.error = payload.error
    },
    [sessionOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null }
      state.token = null
      state.error = null
      state.isAuth = false
    },
    [sessionOperations.logOut.rejected](state, { payload }) {
      state.error = payload.error
    },
  },
})

export default sessionSlice.reducer
