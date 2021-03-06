import Media from 'react-media'
import { Redirect } from 'react-router-dom'
import CommonContainer from '../../containers/CommonContainer'
import { mediaQueries } from '../../utils'
import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import Currency from '../../components/Currency'
import s from './CurrencyPage.module.css'

function CurrencyPage() {
  return (
    <>
      <Header />
      <CommonContainer>
        <div className={s.container}>
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
      </CommonContainer>
    </>
  )
}

export default CurrencyPage
