import { Fade } from 'react-awesome-reveal';
import {
  AwardsWrap,
  AwardsInnerWrap,
  MiniTitle,
  SubTitle,
  Description,
  Button,
  FlexDiv,
  FlexItemDiv,
} from 'styles/mainStyle';

const Awards = () => {
  return (
    <AwardsWrap>
      <AwardsInnerWrap>
        <FlexDiv>
          <div style={{ flex: 1, alignSelf: 'center', textAlign: 'center' }}>
            <img src="images/us.jpeg" width="300px" alt="award" />
          </div>
          <FlexItemDiv>
            <Fade direction="down">
              <MiniTitle>올해의 테마</MiniTitle>
            </Fade>
            <Fade direction="left">
              <SubTitle>US</SubTitle>
            </Fade>
            <Fade direction="up">
              <Description>
                강남 <br />
                키이스케이프 우주라이크점 <br />
              </Description>
            </Fade>
            <Fade direction="up">
              <Button>테마정보 보러가기</Button>
            </Fade>
          </FlexItemDiv>
        </FlexDiv>
      </AwardsInnerWrap>
    </AwardsWrap>
  );
};

export default Awards;
