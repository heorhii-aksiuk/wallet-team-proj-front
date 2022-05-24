import Media from 'react-media'
import { useDispatch } from 'react-redux'

import { mediaQueries } from '../../utils'
import CommonContainer from '../../containers/CommonContainer'

import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import Balance from '../../components/Balance'
import Currency from '../../components/Currency'
import HomeTab from '../../components/HomeTab'
import ButtonAddTransactions from '../../components/ButtonAddTransactions'
import { globalActions } from '../../redux/globall'
import s from './HomePage.module.css'

function HomePage() {
  const dispatch = useDispatch()

  return (
    <>
      <Header></Header>
      <CommonContainer>
        <div className={s.container}>
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

          <ButtonAddTransactions
            onClick={() => dispatch(globalActions.openModalAddTransaction())}
          />
        </div>
      </CommonContainer>
    </>
  )
}

export default HomePage
