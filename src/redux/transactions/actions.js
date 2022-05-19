import { createAction } from '@reduxjs/toolkit';

export const addTransactionRequest = createAction(
    'transactions/addTransactionRequest'
)
export const addTransactionSucces = createAction(
    'transactions/addTransactionSucces'
)
export const addTransactionError = createAction(
    'transactions/addTransactionError'
)