import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { getUserinfoAsync, resetUserinfoAsync } from 'redux/actions/userAction';
import { HeaderWrap, HeaderInnerWrap, LinkNav, LinkBold, Div } from 'styles/headerStyle';
import { message } from 'antd';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  console.log('user: ', user);

  useEffect(() => {
    dispatch(getUserinfoAsync.request());
  }, []);

  const logout = () => {
    if (!sessionStorage.getItem('accessToken')) {
      return;
    }

    sessionStorage.removeItem('accessToken');
    message.success({
      content: `${user.nickname}님 안녕히 가세요!`,
      className: 'custom-class',
      style: {
        marginTop: '10vh',
      },
    });
    dispatch(resetUserinfoAsync.request());
  };

  const adminHandler = () => {
    if (!user.admin) {
      message.warn({
        content: `관리자 계정만 접근할 수 있습니다.`,
        className: 'custom-class',
        style: {
          marginTop: '10vh',
        },
      });
    }
  };

  return (
    <HeaderWrap>
      <HeaderInnerWrap>
        <Div>
          <LinkBold to="/">DEEPESCAPE AI</LinkBold>
        </Div>
        <Div>
          <LinkNav to="/" style={{ padding: 0 }}>
            서비스 소개
          </LinkNav>
          <LinkNav to="/theme">테마정보</LinkNav>
          <LinkNav to={user.admin ? '/admin' : '/'} onClick={adminHandler}>
            관리
          </LinkNav>
          {user.nickname ? (
            <LinkNav to="/" onClick={logout}>
              로그아웃
            </LinkNav>
          ) : (
            <LinkNav to="/login">로그인</LinkNav>
          )}
        </Div>
      </HeaderInnerWrap>
    </HeaderWrap>
  );
};

export default Header;
