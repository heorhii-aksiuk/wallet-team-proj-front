import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const getAllTransactions = createAsyncThunk(
  'finance/getAllTransactions',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transactions')

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue()
      // обработать ошибку
    }
  },
)

const addTransaction = createAsyncThunk(
  'finance/addTransaction',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await axios.post('/transactions', transaction)

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue()
      // обработать ошибку
    }
  },
)

const getStatistics = createAsyncThunk(
  'finance/getStatistics',
  async (period, thunkAPI) => {
    try {
      const { data } = await axios.get('/statistics', period)

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue()
      // обработать ошибку
    }
  },
)

const getCategories = createAsyncThunk(
  'finance/getCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/categories')

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue()
      // обработать ошибку
    }
  },
)

export { getAllTransactions, addTransaction, getStatistics, getCategories }
