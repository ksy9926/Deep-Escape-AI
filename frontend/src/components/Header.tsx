import { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  background: lightblue;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <div>
        <Link to="/">홈</Link>
      </div>
      <div>
        <Link to="/festa">Festa 목록</Link>
      </div>
      <div>
        <Link to="/make">AI 제작</Link>
      </div>
    </HeaderWrap>
  );
};

export default Header;
