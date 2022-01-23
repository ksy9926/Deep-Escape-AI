import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  background: #000;

  backdrop-filter: blur(30px);
  border-bottom: 1px solid rgba(0, 27, 55, 0.1);
`;

export const HeaderInnerWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1130px;
  height: 60px;
  margin: 0 auto;
`;

export const LinkBold = styled(Link)`
  font-weight: bold;
  font-size: 1.2rem;
`
export const LinkNav = styled(LinkBold)`
  padding-left: 20px;
  font-weight: bold;
  font-size: 1.2rem;
`

export const Div = styled.div``