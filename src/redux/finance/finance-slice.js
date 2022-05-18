import { createSlice } from '@reduxjs/toolkit'
import * as financeOperations from './finance-operations'
import { sessionOperations } from '../session'

const initialState = {
  totalBalance: '90000.98',
  transactions: [],
  statistics: {
    data: [
      {
        id: 1,
        color: '#FED057',
        name: 'Основные расходы',
        quantity: '8700.00',
      },
      { id: 2, color: '#FFD8D0', name: 'Продукты', quantity: '3800.74' },
      { id: 3, color: '#FD9498', name: 'Машина', quantity: '1500.00' },
      { id: 4, color: '#C5BAFF', name: 'Забота о себе', quantity: '800.00' },
      { id: 5, color: '#6E78E8', name: 'Забота о детях', quantity: '2208.50' },
      { id: 6, color: '#4A56E2', name: 'Товары для дома', quantity: '300.00' },
      { id: 7, color: '#81E1FF', name: 'Образование', quantity: '3400.00' },
      { id: 8, color: '#24CCA7', name: 'Досуг', quantity: '1230.00' },
      { id: 9, color: '#00AD84', name: 'Другие расходы', quantity: '610.00' },
    ],
    expenses: '25400.40', // расходы
    income: '19700', // доходы
  },
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
