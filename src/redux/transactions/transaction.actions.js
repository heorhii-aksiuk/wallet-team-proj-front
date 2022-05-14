import { createAction } from '@reduxjs/toolkit';

// modal
export const openModalTransaction = createAction(
    'transactions/openModalTransaction',
);
export const closeModalTransaction = createAction(
    'transactions/closeModalTransaction',
);
