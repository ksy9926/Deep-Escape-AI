import { MainWrap } from 'styles/mainStyle';
import Banner from 'components/MainPage/Banner';
import Introduction from 'components/MainPage/Introduction';
import Awards from 'components/MainPage/Awards';
import Shortcut from 'components/MainPage/Shortcut';

const MainPage = () => {
  return (
    <MainWrap>
      <Banner />
      <Introduction />
      <Awards />
      <Shortcut />
    </MainWrap>
  );
};

export default MainPage;
