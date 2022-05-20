import Media from 'react-media'

import { mediaQueries } from '../../utils'
import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import Balance from '../../components/Balance'
import Currency from '../../components/Currency'
import HomeTab from '../../components/HomeTab'
import s from './HomePage.module.css'

function HomePage() {
  return (
    <div className={s.container}>
      <Header />

      <div className={s.box1}>
        <Media queries={mediaQueries}>
          {(matches) => (
            <>
              {matches.response && (
                <>
                  <Navigation />
                  <Balance />
                </>
              )}
              {matches.mobile && (
                <>
                  <Navigation />
                  <Balance />
                </>
              )}
              {matches.tablet && (
                <>
                  <div className={s.subBox1}>
                    <Navigation />
                    <Balance />
                  </div>

                  <div className={s.subBox2}>
                    <Currency />
                  </div>
                </>
              )}
              {matches.desktop && (
                <>
                  <Navigation />
                  <Balance />
                  <Currency />
                </>
              )}
            </>
          )}
        </Media>
      </div>

      <div className={s.box2}>
        <HomeTab />
      </div>
    </div>
  )
}

export default HomePage
