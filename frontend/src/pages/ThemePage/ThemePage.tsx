import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { getVideos } from 'apis/video';
import { VIDEO_TYPE } from 'constants/constants';
import {
  ThemeWrap,
  ThemeTitle,
  ThemeMiniTitle,
  ThemeSubTitle,
  VideoZoom,
  Video,
  FlexDiv,
  FlexMarginDiv,
} from 'styles/themeStyle';

const ThemePage = () => {
  const [introVideo, setIntroVideo] = useState({
    url: '',
  });

  // 첫 진입시 AI 영상 불러오기
  useEffect(() => {
    const fetchData = async () => {
      const res = await getVideos(VIDEO_TYPE.awards);

      setIntroVideo(res);
    };

    fetchData();
  }, []);

  return (
    <ThemeWrap>
      <ThemeTitle>올해의 테마</ThemeTitle>
      <FlexDiv>
        {/* Theme Info : 영상 비디오 UI */}
        {introVideo.url && (
          <VideoZoom>
            <Video src={introVideo.url} controls />
          </VideoZoom>
        )}
        {/* Theme Info : 테마 정보 UI */}
        <FlexMarginDiv>
          <img src="images/us.jpeg" width="250px" alt="awards" />
          <Fade direction="down">
            <ThemeMiniTitle>강남 키이스케이프 우주라이크점</ThemeMiniTitle>
          </Fade>
          <Fade direction="left">
            <ThemeSubTitle>US</ThemeSubTitle>
          </Fade>
        </FlexMarginDiv>
      </FlexDiv>
    </ThemeWrap>
  );
};

export default ThemePage;
