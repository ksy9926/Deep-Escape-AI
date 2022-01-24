import styled from 'styled-components';

export const FooterWrap = styled.footer`
  width: 100%;
`;

export const FooterInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1130px;
  padding: 80px;
  border-top: 1px solid #000;

  margin: 0 auto;
`;

// 개인 정보
export const ContactDiv = styled.div`
`
export const ContactTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 20px;
`

export const ContactText = styled.div`
  font-size: 1.1rem;
  margin-bottom: 10px;
`
export const GithubLink = styled.a`
  color: #000;
`

// 딥브레인 정보
export const DeepBrainDiv = styled.div`
`

export const DeepBrainTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 20px;
`

export const DeepBrainLink = styled.a`
  color: #fff;
  background: #000;
  padding: 10px 50px;
`