import {
  FooterWrap,
  FooterInnerWrap,
  ContactDiv,
  ContactTitle,
  ContactText,
  GithubLink,
  DeepBrainDiv,
  DeepBrainTitle,
  DeepBrainLink,
} from 'styles/footerStyle';

const Footer = () => {
  return (
    <FooterWrap>
      <FooterInnerWrap>
        {/* Footer Info : 개인 연락처 UI */}
        <ContactDiv>
          <ContactTitle>Contact</ContactTitle>
          <ContactText>이메일 : ksy9926@naver.com</ContactText>
          <ContactText>
            Github :{' '}
            <GithubLink href="https://github.com/ksy9926">https://github.com/ksy9926</GithubLink>
          </ContactText>
        </ContactDiv>
        {/* Footer Info : 딥브레인AI 정보 UI */}
        <DeepBrainDiv>
          <DeepBrainTitle>DEEPBRAIN AI</DeepBrainTitle>
          <DeepBrainLink href="https://www.deepbrainai.io/ko/">홈페이지 바로가기</DeepBrainLink>
        </DeepBrainDiv>
      </FooterInnerWrap>
    </FooterWrap>
  );
};

export default Footer;
