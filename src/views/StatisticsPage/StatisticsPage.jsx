import Media from 'react-media'

import CommonContainer from '../../containers/CommonContainer'
import { mediaQueries } from '../../utils'
import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import Balance from '../../components/Balance'
import Currency from '../../components/Currency'
import DiagramTab from '../../components/DiagramTab'
import s from './StatisticsPage.module.css'

function StatisticsPage() {
  return (
    <>
      <Header />
      <CommonContainer>
        <div className={s.container}>
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
            <DiagramTab />
          </div>
        </div>
      </CommonContainer>
    </>
  )
}

export default StatisticsPage
