import { createSlice } from '@reduxjs/toolkit'
import * as financeOperations from './finance-operations'
import { sessionOperations } from '../session'

const initialState = {
  totalBalance: 0,
  transactions: [],
  statistics: [],
  categories: [],
  error: null,
}

const financeSlice = createSlice({
  name: 'finanse',
  initialState,
  extraReducers: {
    [financeOperations.getAllTransactions.fulfilled](state, { payload }) {
      state.totalBalance = payload.totalBalance
      state.transactions = payload.transactions
      state.error = null
    },
    [financeOperations.getAllTransactions.rejected](state, { payload }) {
      state.error = payload.error
    },
    [financeOperations.addTransaction.fulfilled](state, { payload }) {
      state.totalBalance = payload.totalBalance
      state.transactions = payload.transactions
      state.error = null
    },
    [financeOperations.addTransaction.rejected](state, { payload }) {
      state.error = payload.error
    },
    [financeOperations.getStatistics.fulfilled](state, { payload }) {
      state.statistics = payload.statistics
      state.state.error = null
    },
    [financeOperations.getStatistics.rejected](state, { payload }) {
      state.error = payload.error
    },
    [financeOperations.getCategories.fulfilled](state, { payload }) {
      state.categories = payload.categories
      state.state.error = null
    },
    [financeOperations.getCategories.rejected](state, { payload }) {
      state.error = payload.error
    },
    [sessionOperations.logOut.fulfilled](state) {
      state = initialState
    },
  },
})

export default financeSlice.reducer
