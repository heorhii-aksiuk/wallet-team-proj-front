import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuth: false,
  error: null,
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: {},
})

export default sessionSlice.reducer
