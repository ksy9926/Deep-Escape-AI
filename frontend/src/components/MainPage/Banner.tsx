import { MainBanner, MainVideo, BannerTextDiv, BannerText } from 'styles/mainStyle';
import { Fade } from 'react-awesome-reveal';

const Banner = () => {
  return (
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
  );
};

export default Banner;
