import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  extraReducers: {},
})

export default globalSlice.reducer
