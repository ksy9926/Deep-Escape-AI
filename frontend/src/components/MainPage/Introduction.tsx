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
import { useNavigate } from 'react-router-dom';

const Introduction = () => {
  const navigate = useNavigate();
  const [introVideo, setIntroVideo] = useState({
    url: '',
  });

  // 첫 진입시 AI 영상 불러오기
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
        {/* Introduction Info : 방탈출 설명 텍스트 UI */}
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
              최신 소식은 어떤 것이 있는지 알아보세요.
            </Description>
          </Fade>
          <Fade direction="up">
            <Button onClick={() => navigate('/theme')}>테마정보 보러가기</Button>
          </Fade>
        </FlexMarginDiv>
        {/* Introduction Info : 영상 비디오 UI */}
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
