import Media from 'react-media'
import { Redirect } from 'react-router-dom'

import { mediaQueries } from '../../utils'

import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import Currency from '../../components/Currency'
import s from './CurrencyPage.module.css'

function CurrencyPage() {
  return (
    <div className={s.container}>
      <Header />

      <Media queries={mediaQueries}>
        {(matches) => (
          <>
            {matches.response && (
              <div className={s.box}>
                <Navigation />
                <Currency />
              </div>
            )}
            {matches.mobile && (
              <div className={s.box}>
                <Navigation />
                <Currency />
              </div>
            )}
            {matches.tablet && <Redirect to="/" />}
            {matches.desktop && <Redirect to="/" />}
          </>
        )}
      </Media>
    </div>
  )
}

export default CurrencyPage
