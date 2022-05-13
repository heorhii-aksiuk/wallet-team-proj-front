import Media from 'react-media'
import { mediaQueries } from './utils/constants'
import Header from './components/Header'

function App() {
  return (
    <>
      {/* <Media queries={mediaQueries}>
        {(matches) =>
          matches.desktop ? <p>I am desktop!</p> : <p>I am not desktop!</p>
        }
      </Media> */}
      <Header></Header>
    </>
  )
}

export default App
