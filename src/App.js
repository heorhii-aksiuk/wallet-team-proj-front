import Media from 'react-media'
import { mediaQueries } from './utils/constants'

function App() {
  return (
    <>
      <Media queries={mediaQueries}>
        {(matches) =>
          matches.desktop ? <p>I am desktop!</p> : <p>I am not desktop!</p>
        }
      </Media>
    </>
  )
}

export default App
