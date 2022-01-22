import { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrap, HeaderInnerWrap } from 'styles/headerStyle';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderInnerWrap>
        <div>
          <Link to="/" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
            DEEP FESTA
          </Link>
        </div>
        <div>
          <Link to="/festa" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
            서비스 소개
          </Link>
          <Link to="/make" style={{ marginLeft: '20px', fontWeight: 'bold', fontSize: '1.2rem' }}>
            방탈출이란
          </Link>
          <Link to="/" style={{ marginLeft: '20px', fontWeight: 'bold', fontSize: '1.2rem' }}>
            테마정보
          </Link>
          <Link to="/" style={{ marginLeft: '20px', fontWeight: 'bold', fontSize: '1.2rem' }}>
            관리하기
          </Link>
        </div>
      </HeaderInnerWrap>
    </HeaderWrap>
  );
};

export default Header;
