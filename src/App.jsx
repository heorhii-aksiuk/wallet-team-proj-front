// import Media from 'react-media'
// import { mediaQueries } from './utils/constants'
import Header from './components/Header'
import DiagramTab from './components/DiagramTab'
import React, { useState } from 'react'
import CommonContainer from './containers/CommonContainer'
import ButtonAddTransactions from './components/ButtonAddTransactions'
import RegistrationPage from './views/RegistrationPage'
import LoginPage from './views/LoginPage'
import RegistrationForm from './components/RegistrationForm'
// import ModalAddTransaction from './components/ModalAddTransaction'
import Loader from './components/Loader'

function App() {
  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
    useState(false)

  const handleChange = () => {
    setIsModalAddTransactionOpen(!isModalAddTransactionOpen)
  }
  return (
    <>
      {/* <Media queries={mediaQueries}>
        {(matches) =>
          matches.desktop ? <p>I am desktop!</p> : <p>I am not desktop!</p>
        }
      </Media> */}
      <Header />
      <Loader />
      <DiagramTab />
      <CommonContainer>
        {/* <ModalAddTransaction onChange={() => handleChange} /> */}
        <ButtonAddTransactions
          onChange={() => handleChange}
        ></ButtonAddTransactions>
      </CommonContainer>
    </>
  )
}

export default App
