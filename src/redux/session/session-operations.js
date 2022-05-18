import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'locall-host:8000' // backend-url

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unSet() {
    axios.defaults.headers.common.Authorization = ''
  },
}

const signUp = createAsyncThunk(
  'session/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/register', credentials)

      token.set(data.token)

      return data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue()
      
      // обработать ошибку
    }
  },
)

const logIn = createAsyncThunk(
  'session/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', credentials)

      token.set(data.token)

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue()
      // обработать ошибку
    }
  },
)

const refreshCurrentUser = createAsyncThunk(
  'session/refreshCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.session.token

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue()
      // обработать ошибку
    }

    token.set(persistedToken)

    try {
      const { data } = await axios.get('/auth/current')
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue()
      // обработать ошибку
    }
  },
)

const logOut = createAsyncThunk('session/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout')

    token.unSet()
  } catch (error) {
    return thunkAPI.rejectWithValue()
    // обработать ошибку
  }
})

export { signUp, logIn, refreshCurrentUser, logOut }
