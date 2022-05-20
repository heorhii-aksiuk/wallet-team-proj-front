import HomeTabMobile from './HomeTabMobile'
import HomeTabDesktop from './HomeTabDesktop'

import MediaQuery from 'react-responsive'

const TransactionTab = () => {
  return (
    <MediaQuery maxWidth={767}>
      {matches => (matches ? <HomeTabMobile /> : <HomeTabDesktop />)}
    </MediaQuery>
  );
};

export default TransactionTab;