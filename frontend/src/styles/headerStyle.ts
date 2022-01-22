import styled from 'styled-components';

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100vw;
  background: #0000;

  backdrop-filter: blur(30px);
  border-bottom: 1px solid rgba(0, 27, 55, 0.1);
`;

export const HeaderInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1130px;
  height: 50px;
  margin: 0 auto;
`;