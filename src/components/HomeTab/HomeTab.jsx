import HomeTabMobile from './HomeTabMobile'
import HomeTabDesktop from './HomeTabDesktop'
import { mediaQueries } from '../../utils'

import Media from 'react-media'

const HomeTab = () => {
  return (
    <Media queries={mediaQueries}>
      {(matches) =>
        matches.mobile || matches.response ? (
          <HomeTabMobile />
        ) : (
          <HomeTabDesktop />
        )
      }
    </Media>
  )
}

export default HomeTab
