import axios from 'axios';
import {addTransactionError, addTransactionRequest,addTransactionSucces} from "./actions";


export const addTransaction =
    (data) => dispatch => {
        dispatch(addTransactionRequest);

        axios
            .post('/transactions/add', data)
            .then(responce => {
                dispatch(addTransactionSucces(responce.data.data.transactionData))
            })
            .catch(error => {
                dispatch(addTransactionError(error))
            });
    };