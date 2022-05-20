import { createSlice } from '@reduxjs/toolkit'
import * as sessionOperations from './session-operations'

const initialState = {
  user: { name: null },
  token: null,
  error: null,
  isAuth: false,
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: {
    [sessionOperations.signUp.rejected](state, { payload }) {
      state.isAuth = false
      state.error = payload
    },
    [sessionOperations.logIn.fulfilled](state, { payload }) {
      state.user.name = payload.user.name
      state.token = payload.user.token
      state.error = null
      state.isAuth = true
    },
    [sessionOperations.logIn.rejected](state, { payload }) {
      state.error = payload
    },
    [sessionOperations.refreshCurrentUser.fulfilled](state, { payload }) {
      state.user.name = payload.data.name
      state.error = null
      state.isAuth = true
    },
    [sessionOperations.logOut.fulfilled](state) {
      state.user = { name: null }
      state.token = null
      state.error = null
      state.isAuth = false
    },
    [sessionOperations.logOut.rejected](state, { payload }) {
      state.error = payload
    },
  },
})

export default sessionSlice.reducer
