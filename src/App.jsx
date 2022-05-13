import Media from 'react-media'
import { mediaQueries } from './utils/constants'
import Header from './components/Header'

function App() {
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
    </>
  )
}

export default App
