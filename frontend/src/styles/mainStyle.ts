import styled from 'styled-components';
import { Zoom } from 'react-awesome-reveal';

// 공통
export const MainWrap = styled.main`
  width: 100%;
`;

export const MainBanner = styled.section`
  position: relative;
  background: black;
  padding-top: 50px;
  color: white;
`;

export const MainVideo = styled.video`
  width: 100%;
`

export const FlexDiv = styled.div`
  display: flex;
`
export const FlexItemDiv = styled.div`
  flex: 1;
`

// Banner 컴포넌트 스타일
export const BannerTextDiv = styled.div`
  position: absolute; 
  bottom: 25%;
  right: 20%;
`

export const BannerText = styled.span`
  font-size: 3.5rem; 
  font-weight: bold;
`

// Introduction 컴포넌트 스타일
export const IntroductionWrap = styled.div`
  max-width: 1130px;
  margin: 50px auto 100px;
`

export const IntroductionTitle = styled.h2`
  text-align: center; 
  font-size: 3rem; 
  margin: 100px 0 50px; 
  font-weight: 700;
`
export const MiniTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 40px 0 10px;
`

export const SubTitle = styled.div`
  font-weight: bold;
  line-height: 4rem;
  font-size: 3rem;
`

export const Description = styled.div`
  margin: 20px 0; 
  font-size: 1.3rem;
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

export const FlexMarginDiv = styled(FlexItemDiv)`
  margin-left: 120px;
`

export const Video = styled.video`
  height: 500px;
`

export const Button = styled.button`
  font-size: 1.1rem;
  padding: 10px;
  border: 1px solid black; 
  background: none;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`

export const ReservationLink = styled.a`
  font-size: 1.1rem;
  padding: 10px;
  border: 1px solid white;
  background: none;
  color: #fff;

  &:hover {
    cursor: pointer;
    border: 1px solid #a68;
    transition: all 0.5s ease;
  }
`

// Awards 컴포넌트 스타일
export const AwardsWrap = styled.div`
  background: #89cdb6;
`

export const AwardsInnerWrap = styled.div`
  max-width: 1130px;
  margin: 50px auto 100px;
  padding: 100px 0 100px;
  color: #fff;
`

export const AwardsTitle = styled.h2`
  margin-bottom: 80px;
  text-align: center; 
  font-size: 3rem; 
  font-weight: 700;
  color: #fff;
`

export const AwardsWinnerImageWrap = styled.div`
  position: relative;

  flex: 1;
  text-align: center;
`

export const AwardsWinnerImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 30px;
`

export const AwardsTextWrap = styled.div`
  flex: 1;
  text-align: center;
`

// Shortcut 컴포넌트 스타일
export const ShortcutWrap = styled.div`
  max-width: 1130px;
  margin: 50px auto 100px;
`

export const ShortcutTitle = styled.h2`
  margin-bottom: 0;
  font-size: 3rem; 
  font-weight: 700;
`

export const ShortcutDescription = styled.h2`
  margin-bottom: 20px;
  font-size: 1.2rem;
`

export const ShortcutImg = styled.div<{ src: string }>`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  margin: 50px auto 0;
  background: ${props => `center / cover no-repeat url("images/${props.src}.jpg")`};
`

export const LeftMargin = styled.div`
  margin-left: 100px;
`