import Media from 'react-media'
import { Redirect } from 'react-router-dom'

import { mediaQueries } from '../../utils/constants'
import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import Balance from '../../components/Balance'
import Currency from '../../components/Currency'
import s from './HomePage.module.css'

function HomePage() {
  return (
    <div className={s.container}>
      <Header />

      <div className={s.box1}>
        <Media queries={mediaQueries}>
          {(matches) => (
            <>
              {matches.response && <Navigation />}
              {matches.mobile && <Navigation />}
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
        <div>тут будет </div>
      </div>
    </div>
  )
}

export default HomePage