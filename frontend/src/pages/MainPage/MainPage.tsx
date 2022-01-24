import { MainWrap, MainBanner, MainVideo, BannerTextDiv, BannerText } from 'styles/mainStyle';
import Introduction from 'components/MainPage/Introduction';
import Awards from 'components/MainPage/Awards';
import Shortcut from 'components/MainPage/Shortcut';
import { Fade } from 'react-awesome-reveal';

const MainPage = () => {
  return (
    <MainWrap>
      <MainBanner>
        <MainVideo src="videos/game.mp4" autoPlay loop muted />
        <BannerTextDiv>
          <Fade direction="left">
            <BannerText>
              AI가 전하는 <br />
              방탈출 <br />
              소식 및 정보
            </BannerText>
          </Fade>
        </BannerTextDiv>
      </MainBanner>
      <Introduction />
      <Awards />
      <Shortcut />
    </MainWrap>
  );
};

export default MainPage;
