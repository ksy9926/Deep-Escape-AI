import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { getVideos } from 'apis/video';
import { VIDEO_TYPE } from 'constants/constants';
import {
  IntroductionWrap,
  IntroductionTitle,
  MiniTitle,
  SubTitle,
  Description,
  VideoZoom,
  Video,
  Button,
  FlexDiv,
  FlexMarginDiv,
} from 'styles/mainStyle';

const Introduction = () => {
  const [introVideo, setIntroVideo] = useState({
    url: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await getVideos(VIDEO_TYPE.introduction);

      setIntroVideo(res);
    };

    fetchData();
  }, []);

  return (
    <IntroductionWrap>
      <IntroductionTitle>What is Room Escape?</IntroductionTitle>
      <FlexDiv>
        <FlexMarginDiv>
          <Fade direction="down">
            <MiniTitle>Room Escape</MiniTitle>
          </Fade>
          <Fade direction="left">
            <SubTitle>
              세상의 <br />
              모든 방탈출
            </SubTitle>
          </Fade>
          <Fade direction="up">
            <Description>
              영상 AI를 통해 <br />
              방탈출이란 무엇인지, <br />
              최신 소식은 어떤것이 있는지 알아보세요.
            </Description>
          </Fade>
          <Fade direction="up">
            <Button>테마정보 보러가기</Button>
          </Fade>
        </FlexMarginDiv>
        {introVideo.url && (
          <VideoZoom>
            <Video src={introVideo.url} controls />
          </VideoZoom>
        )}
      </FlexDiv>
    </IntroductionWrap>
  );
};

export default Introduction;
