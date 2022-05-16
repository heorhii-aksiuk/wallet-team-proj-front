import { createAction } from '@reduxjs/toolkit'

const openModalTransaction = createAction('global/openModalTransaction')

const closeModalTransaction = createAction('global/closeModalTransaction')

const openModalLogout = createAction('global/openModalLogout')

const closeModalLogout = createAction('global/closeModalLogout')

export {
  openModalTransaction,
  closeModalTransaction,
  openModalLogout,
  closeModalLogout,
}
