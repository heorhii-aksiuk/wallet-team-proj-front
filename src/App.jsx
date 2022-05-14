import Media from 'react-media'
import { mediaQueries } from './utils/constants'
import DiagramTab from './components/DiagramTab'
// import React, { useState } from 'react'
// import CommonContainer from './containers/CommonContainer'
// import ModalAddTransaction from './components/ModalAddTransaction'
// import ButtonAddTransactions from './components/ButtonAddTransactions'

function App() {
  // const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
  //   useState(false)

  // const handleChange = () => {
  //   setIsModalAddTransactionOpen(!isModalAddTransactionOpen)
  // }
  return (
    <>
      <Media queries={mediaQueries}>
        {(matches) =>
          matches.desktop ? <p>I am desktop!</p> : <p>I am not desktop!</p>
        }
      </Media>
      <DiagramTab />
      {/* <CommonContainer>
        <ModalAddTransaction onChange={() => handleChange} />
        <ButtonAddTransactions
          onChange={() => handleChange}
        ></ButtonAddTransactions>
      </CommonContainer> */}
    </>
  )
}

export default App
