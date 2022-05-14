// import Media from 'react-media'
// import { mediaQueries } from './utils/constants'
import React, { useState } from 'react'
import CommonContainer from './containers/CommonContainer'
import ButtonAddTransactions from './components/ButtonAddTransactions'
import RegistrationPage from './views/RegistrationPage'
import LoginPage from './views/LoginPage'

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
      {/* <RegistrationPage/> */}

      <LoginPage/>
      <CommonContainer>
        <ButtonAddTransactions
          onChange={() => handleChange}
        ></ButtonAddTransactions>
      </CommonContainer>
    </>
  )
}

export default App
