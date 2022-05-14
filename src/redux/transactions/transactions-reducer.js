import { createReducer } from '@reduxjs/toolkit';
import {closeModalTransaction, openModalTransaction} from "./transaction.actions";

const modalTransaction = createReducer(false, {
    [openModalTransaction]: () => true,
    [closeModalTransaction]: () => false,
});

export default {modalTransaction}