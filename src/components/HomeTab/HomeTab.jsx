import HomeTabMobile from './HomeTabMobile'
import HomeTabDesktop from './HomeTabDesktop'

import Media from 'react-media'

const TransactionTab = () => {
  return (
    <Media queries={{
      mobile: '(max-width: 767px)',
    }}
    >
      {matches => (matches ? <HomeTabMobile /> : <HomeTabDesktop />)}
    </Media>
  );
};

export default TransactionTab;