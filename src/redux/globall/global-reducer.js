import { createReducer } from '@reduxjs/toolkit'
import * as globalActions from './global-actions'

const initialState = {
  isLoading: false,
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
}

const globalReducer = createReducer(initialState, {
  [globalActions.openModalTransaction]: (state) => ({
    ...state,
    isModalAddTransactionOpen: true,
  }),
  [globalActions.closeModalTransaction]: (state) => ({
    ...state,
    isModalAddTransactionOpen: false,
  }),
  [globalActions.openModalLogout]: (state) => ({
    ...state,
    isModalLogoutOpen: true,
  }),
  [globalActions.closeModalLogout]: (state) => ({
    ...state,
    isModalLogoutOpen: false,
  }),
})

export default globalReducer
