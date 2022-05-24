import { createAction } from '@reduxjs/toolkit'

const openModalAddTransaction = createAction('global/openModalAddTransaction')

const closeModalAddTransaction = createAction('global/closeModalAddTransaction')

const openModalUpdateTransaction = createAction(
  'global/openModalUpdateTransaction',
)

const closeModalUpdateTransaction = createAction(
  'global/closeModalUpdateTransaction',
)

const openModalLogout = createAction('global/openModalLogout')

const closeModalLogout = createAction('global/closeModalLogout')

export {
  openModalAddTransaction,
  closeModalAddTransaction,
  openModalUpdateTransaction,
  closeModalUpdateTransaction,
  openModalLogout,
  closeModalLogout,
}
