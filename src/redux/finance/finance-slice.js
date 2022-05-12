import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalBalance: 0,
  data: [],
}

const financeSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {},
})

export default financeSlice.reducer
