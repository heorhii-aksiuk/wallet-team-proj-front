import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const fetchTransactions = createAsyncThunk(
  'finance/fetchTransactions',
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

export { fetchTransactions }
