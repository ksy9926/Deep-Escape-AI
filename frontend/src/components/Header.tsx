import { getUserinfo } from 'apis/user';
import { useEffect } from 'react';
import { HeaderWrap, HeaderInnerWrap, LinkNav, LinkLogo } from 'styles/headerStyle';

const Header = () => {
  useEffect(() => {
    getUserinfo();
  }, []);

  return (
    <HeaderWrap>
      <HeaderInnerWrap>
        <div>
          <LinkLogo to="/">DEEPESCAPE AI</LinkLogo>
        </div>
        <div>
          <LinkNav to="/">서비스 소개</LinkNav>
          <LinkNav to="/make">방탈출이란</LinkNav>
          <LinkNav to="/theme">테마정보</LinkNav>
          <LinkNav to="/admin">관리하기</LinkNav>
        </div>
      </HeaderInnerWrap>
    </HeaderWrap>
  );
};

export default Header;
