import Media from 'react-media'
import { mediaQueries } from './utils/constants'
import Header from './components/Header'
import DiagramTab from './components/DiagramTab'
import React, { useState } from 'react'
import CommonContainer from './containers/CommonContainer'
import ButtonAddTransactions from './components/ButtonAddTransactions'

function App() {
  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
    useState(false)

  const handleChange = () => {
    setIsModalAddTransactionOpen(!isModalAddTransactionOpen)
  }
  return (
    <>
      <Media queries={mediaQueries}>
        {(matches) =>
          matches.response || matches.mobile ? (
            <>
              <Header media="mobile"></Header>
            </>
          ) : (
            <>
              <Header></Header>
            </>
          )
        }
      </Media>
      <DiagramTab />
      <CommonContainer>
        <ButtonAddTransactions
          onChange={() => handleChange}
        ></ButtonAddTransactions>
      </CommonContainer>
    </>
  )
}

export default App
