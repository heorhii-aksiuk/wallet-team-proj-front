import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { successNotif, errorNotif } from '../../services'

axios.defaults.baseURL = 'https://wallet-team-proj.herokuapp.com'

export const publicAxios = axios.create({
  baseURL: 'https://wallet-team-proj.herokuapp.com',
})

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unSet() {
    axios.defaults.headers.common.Authorization = ''
  },
}

const signUp = createAsyncThunk(
  'session/signUp',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('/auth/registration', credentials)

      successNotif('Регистрация прошла успешно', 1000)

      return
    } catch (error) {
      errorNotif('Не удалось зарегистрировать пользователя', {
        comment: error.response.data.message || null,
        closeTime: 5000,
      })

      return thunkAPI.rejectWithValue(error?.response?.data)
    }
  },
)

const logIn = createAsyncThunk(
  'session/logIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', credentials)

      token.set(data.user.token)

      return data
    } catch (error) {
      errorNotif('Не удалось войти в учетную запись', {
        comment: error.response.data.message || null,
        closeTime: 5000,
      })

      return thunkAPI.rejectWithValue(error.response.data)
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
    }

    token.set(persistedToken)

    try {
      const { data } = await axios.get('/users/current')

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue()
    }
  },
)

const logOut = createAsyncThunk('session/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout')

    token.unSet()
  } catch (error) {
    errorNotif('Не удалось выйти из учетной записи', {
      comment: error.response.data.message || null,
      closeTime: 5000,
    })

    return thunkAPI.rejectWithValue(error.response.data)
  }
})

export { signUp, logIn, refreshCurrentUser, logOut }
