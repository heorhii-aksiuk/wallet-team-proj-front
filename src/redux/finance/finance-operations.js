import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { successNotif, errorNotif } from '../../services'
import { globalActions } from '../globall'

axios.defaults.baseURL = 'https://wallet-team-proj.herokuapp.com'

const getAllTransactions = createAsyncThunk(
  'finance/getAllTransactions',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/transactions`)

      return data
    } catch (error) {
      errorNotif('Не удалось загрузить историю транзакций', {
        comment: error.response.data.message || null,
        closeTime: 5000,
      })

      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

const addTransaction = createAsyncThunk(
  'finance/addTransaction',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await axios.post('/transactions', transaction)

      successNotif('Трансакция добавлена', 2000)

      thunkAPI.dispatch(getAllTransactions())
      thunkAPI.dispatch(globalActions.closeModalAddTransaction())

      return data
    } catch (error) {
      errorNotif('Не удалось создать транзакцию', {
        comment: error.response.data.message || null,
        closeTime: 5000,
      })

      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

const updateTransaction = createAsyncThunk(
  'finance/updateTransaction',
  async ({ id, transaction }, thunkAPI) => {
    try {
      await axios.put(`/transactions/${id}`, transaction)

      successNotif('Транзакция успешно изменена', 2000)

      thunkAPI.dispatch(getAllTransactions())

      return
    } catch (error) {
      errorNotif('Не удалось изменить транзакцию', {
        comment: error.response.data.message || null,
        closeTime: 5000,
      })

      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

const deleteTransaction = createAsyncThunk(
  'finance/deleteTransaction',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/transactions/${id}`)

      successNotif('Транзакция успешно удалена', 2000)

      thunkAPI.dispatch(getAllTransactions())

      return
    } catch (error) {
      errorNotif('Не удалось удалить транзакцию', {
        comment: error.response.data.message || null,
        closeTime: 5000,
      })

      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

const getStatistics = createAsyncThunk(
  'finance/getStatistics',
  async (period, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/statistics/statistics?startDate=${period.startDate}&endDate=${period.endDate}`,
      )

      return data
    } catch (error) {
      errorNotif('Не удалось получить статистику', {
        comment: error.response.data.message || null,
        closeTime: 5000,
      })

      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

const getCategories = createAsyncThunk(
  'finance/getCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/categories/hardcoded')

      return data
    } catch (error) {
      errorNotif('Не удалось получить список доступных категорий', {
        comment: error.response.data.message || null,
        closeTime: 5000,
      })

      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export {
  getAllTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  getStatistics,
  getCategories,
}
