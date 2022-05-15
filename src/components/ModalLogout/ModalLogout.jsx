import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {closeModalTransaction} from "../../redux/transactions/transaction-actions";
import Modal from "../Modal";

export default function ModalLogout() {
    const dispatch = useDispatch()
    const closeTransaction = useCallback(() => {
        return dispatch(closeModalTransaction())
    }, [dispatch])
    return (
        <Modal onClose={closeTransaction}/>
    )
}