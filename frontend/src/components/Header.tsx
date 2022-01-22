import { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrap, HeaderInnerWrap } from 'styles/headerStyle';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderInnerWrap>
        <div>
          <Link to="/">홈</Link>
        </div>
        <div>
          <Link to="/festa">서비스 소개</Link>
          <Link to="/make" style={{ marginLeft: '10px' }}>
            하나
          </Link>
          <Link to="/" style={{ marginLeft: '10px' }}>
            둘
          </Link>
          <Link to="/" style={{ marginLeft: '10px' }}>
            셋
          </Link>
        </div>
      </HeaderInnerWrap>
    </HeaderWrap>
  );
};

export default Header;
