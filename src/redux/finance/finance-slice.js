import { createSlice } from '@reduxjs/toolkit'
import * as financeOperations from './finance-operations'

const initialState = {
  totalBalance: 0,
  data: [],
  error: null,
  isFetchingData: false,
}

const financeSlice = createSlice({
  name: 'finanse',
  initialState,
  extraReducers: {
    [financeOperations.fetchTransactions.pending](state, action) {
      state.isFetchingData = true
    },
    [financeOperations.fetchTransactions.fulfilled](state, { payload }) {
      state.totalBalance = payload.totalBalance
      state.data = payload.data
      state.error = null
      state.isFetchingData = false
    },
    [financeOperations.fetchTransactions.rejected](state, { payload }) {
      state.error = payload.error
      state.isFetchingData = false
    },
  },
})

export default financeSlice.reducer
