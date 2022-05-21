import React from 'react'
import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'

import { globalActions } from '../../redux/globall'
import styles from './Modal.module.css'

export default function Modal({ children }) {
  const dispatch = useDispatch()

  const onBackDropClick = () => {
    dispatch(globalActions.closeModalTransaction())
    dispatch(globalActions.closeModalLogout())
  }

  const modalRoot = document.querySelector('#modal-root')
  return createPortal(
    <div id="backdrop" className={styles.backdrop} onClick={onBackDropClick}>
      {children}
    </div>,
    modalRoot,
  )
}
