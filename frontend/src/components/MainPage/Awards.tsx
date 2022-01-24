import { Fade } from 'react-awesome-reveal';
import {
  AwardsWrap,
  AwardsInnerWrap,
  AwardsWinnerImageWrap,
  AwardsWinnerImage,
  AwardsTextWrap,
  AwardsTitle,
  MiniTitle,
  SubTitle,
  Description,
  ReservationLink,
  FlexDiv,
} from 'styles/mainStyle';

const Awards = () => {
  return (
    <AwardsWrap>
      <AwardsInnerWrap>
        <AwardsTitle>ESCAPE ROOM AWARDS</AwardsTitle>
        <FlexDiv>
          {/* Awards Info : 테마 이미지 UI */}
          <AwardsWinnerImageWrap>
            <Fade direction="down">
              <AwardsWinnerImage src="images/us.jpeg" alt="award" />
            </Fade>
          </AwardsWinnerImageWrap>
          {/* Awards Info : 테마 정보 UI */}
          <AwardsTextWrap>
            <Fade direction="down">
              <MiniTitle>2021 한국 방탈출 어워즈</MiniTitle>
            </Fade>
            <Fade direction="right">
              <SubTitle>
                올해의 테마 <br /> US
              </SubTitle>
            </Fade>
            <Description>
              강남 키이스케이프
              <br />
              우주라이크점
            </Description>
            <ReservationLink href="https://keyescape.co.kr/" target="_blank">
              테마 예약하기
            </ReservationLink>
          </AwardsTextWrap>
        </FlexDiv>
      </AwardsInnerWrap>
    </AwardsWrap>
  );
};

export default Awards;
