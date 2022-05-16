import { createSlice } from '@reduxjs/toolkit'
import * as financeOperations from './finance-operations'
import { sessionOperations } from '../session'

const initialState = {
  totalBalance: 0,
  data: [],
  error: null,
}

const financeSlice = createSlice({
  name: 'finanse',
  initialState,
  extraReducers: {
    [financeOperations.fetchTransactions.fulfilled](state, { payload }) {
      state.totalBalance = payload.totalBalance
      state.data = payload.data
      state.error = null
    },
    [financeOperations.fetchTransactions.rejected](state, { payload }) {
      state.error = payload.error
    },
    [financeOperations.addTransaction.fulfilled](state, { payload }) {
      state.totalBalance = payload.totalBalance
      state.data = payload.data
      state.error = null
    },
    [financeOperations.addTransaction.rejected](state, { payload }) {
      state.error = payload.error
    },
    [sessionOperations.logOut.fulfilled](state) {
      state = initialState
    },
  },
})

export default financeSlice.reducer
