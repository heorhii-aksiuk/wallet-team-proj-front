import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast'

axios.defaults.baseURL = 'https://wallet-team-proj.herokuapp.com'

const getAllTransactions = createAsyncThunk(
  'finance/getAllTransactions',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transactions')

      return data
    } catch (error) {
      toast.error(error.response.data.message)

      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

const addTransaction = createAsyncThunk(
  'finance/addTransaction',
  async (transaction, thunkAPI) => {
    try {
      const { data } = await axios.post('/transactions', transaction)

      toast.success('Трансакция добавлена')

      return data
    } catch (error) {
      toast.error(error.response.data.message)

      return thunkAPI.rejectWithValue(error.response.data)
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
      toast.error(error.response.data.message)

      return thunkAPI.rejectWithValue(error.response.data)
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
      toast.error(error.response.data.message)

      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export { getAllTransactions, addTransaction, getStatistics, getCategories }
