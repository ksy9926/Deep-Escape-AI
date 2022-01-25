import styled from 'styled-components';
import { Zoom } from 'react-awesome-reveal';

// Theme 컴포넌트 스타일
export const ThemeWrap = styled.div`
  max-width: 1130px;
  margin: 50px auto 100px;
`

export const ThemeTitle = styled.h2`
  text-align: center; 
  font-size: 3rem; 
  margin: 100px 0 50px; 
  font-weight: 700;
`
export const ThemeMiniTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 40px 0 10px;
`

export const ThemeSubTitle = styled.div`
  font-weight: bold;
  line-height: 4rem;
  font-size: 3rem;
`

export const VideoZoom = styled(Zoom)`
  flex: 1;
  height: 500px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  color: #fff;
`

export const Video = styled.video`
  height: 500px;
  width: 280px;
`

export const FlexDiv = styled.div`
  display: flex;
`

export const FlexMarginDiv = styled.div`
  flex: 1;
  margin: auto 0 auto 200px;
`